SM.DefineModule('mvrpg/screens/tile-grid', function (require) {
  const GameEntity = require('pxlr/core/game-entity');

  const Color = require('pxlr/core/RGB-color');

  return SM.DefineClass([GameEntity, {

    constructor(parent, dimensions) {
      this.dimensions = dimensions;
    },

    renderToFrame: SM.event(function (frame) {
      let red = new Color(256, 0, 0);

      for (let w = 0; w <= this.dimensions.width; w++) {
        for (let h = 0; h <= this.dimensions.height; h++) {
          if (w % 32 === 0 || h % 32 === 0) {
            let frameColor = frame.cellAt(w, h);
            frameColor.copyFromColor(red);
          }
        }
      }
    })

  }]);
});
