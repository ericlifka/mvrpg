SM.DefineModule('main', function (require) {
  let RunLoop = require('pxlr/core/run-loop');
  let Renderer = require('pxlr/gl/webgl');
  let Sprite = require('pxlr/core/sprite');

  let width = 250;
  let height = 150;
  let colorWidthStep = 256 / width;
  let colorHeightStep = 256 / height;
  let offset = 0;
  let sprite = Sprite.newEmptySprite({width, height});

  let renderer = new Renderer({width, height});
  let runLoop = new RunLoop(function () {
    let frame = renderer.newRenderFrame();

    updateGradient();
    sprite.renderToFrame(frame);

    renderer.renderFrame(frame);
  });

  function updateGradient() {
    offset = (offset + 1) % 256;

    sprite.iterateCells((color, x, y) => {
      if (x % 2 === 0 && y % 2 === 0) {
        color.setR(0.0);
        color.setG(0.0);
      } else {
        color.setR(x * colorWidthStep + offset);
        color.setG(y * colorHeightStep + offset);
      }
    });
  }

  runLoop.start();
});
