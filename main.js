SM.DefineModule('main', function (require) {
  const Color = require('pxlr/core/RGB-color');
  const RunLoop = require('pxlr/core/run-loop');
  const Renderer = require('pxlr/gl/webgl');
  const KeyboardInput = require('pxlr/controllers/keyboard-input');
  const GamepadInput = require('pxlr/controllers/gamepad-input');

  const MVRPGgame = require('mvrpg/game');


  const gameDimensions = {width: 250, height: 150};
  const gameInstance = new MVRPGgame(gameDimensions);
  const renderer = new Renderer(gameDimensions);
  const keyboardInput = new KeyboardInput();
  const gamepadInput = new GamepadInput();

  const frame = renderer.newRenderFrame();
  frame.setFillColor(Color.fromHex("#000000"));

  const runLoop = new RunLoop(function (dtime) {
    gameInstance.trigger('update', dtime, [
      keyboardInput.getInputState(),
      gamepadInput.getInputState()
    ]);

    frame.clear();
    gameInstance.trigger('renderToFrame', frame);

    renderer.renderFrame();
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
