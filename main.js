SM.DefineModule('main', function (require) {
  const RunLoop = require('pxlr/core/run-loop');
  const Renderer = require('pxlr/gl/webgl');

  const TileRPG = require('game/tile-rpg');

  const gameDimensions = {width: 250, height: 150};

  const gameInstance = new TileRPG(gameDimensions);
  const renderer = new Renderer(gameDimensions);
  const runLoop = new RunLoop(function (dtime) {
    gameInstance.processInput([ ]);
    gameInstance.update(dtime);

    let frame = renderer.newRenderFrame();
    gameInstance.renderToFrame(frame);

    renderer.renderFrame(frame);
  });

  window.activeGame = gameInstance;
  runLoop.start();
});
