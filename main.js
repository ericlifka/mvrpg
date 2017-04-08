SM.DefineModule('main', function (require) {
  const RunLoop = require('pxlr/core/run-loop');
  const Renderer = require('pxlr/gl/webgl');
  const KeyboardInput = require('pxlr/controllers/keyboard-input');
  const GamepadInput = require('pxlr/controllers/gamepad-input');

  const TileRPG = require('game/tile-rpg');

  const gameDimensions = {width: 250, height: 150};
  const gameInstance = new TileRPG(gameDimensions);
  const renderer = new Renderer(gameDimensions);
  const keyboardInput = new KeyboardInput();
  const gamepadInput = new GamepadInput();
  const runLoop = new RunLoop(function (dtime) {
    gameInstance.trigger('processInput', [
      keyboardInput.getInputState(),
      gamepadInput.getInputState()
    ]);

    gameInstance.trigger('update', dtime);

    let frame = renderer.newRenderFrame();
    gameInstance.trigger('renderToFrame', frame);

    renderer.renderFrame(frame);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      runLoop.stop();
    }
  });

  window.addEventListener("blur", function () {
    runLoop.stop();
  });

  window.addEventListener("focus", function () {
    keyboardInput.clearState();
    gamepadInput.clearState();
    runLoop.start();
  });

  window.activeGame = gameInstance;
  runLoop.start();
});
