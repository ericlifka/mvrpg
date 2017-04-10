SM.DefineModule('mvrpg/game', function (require) {
  const GameEntity = require('pxlr/core/game-entity');

  const Cursor = require('mvrpg/components/cursor');
  const TileGrid = require('mvrpg/screens/tile-grid');

  return SM.DefineClass([GameEntity, {
    constructor(dimensions) {
      this.dimensions = dimensions;
      this.tileGrid = new TileGrid(this, dimensions);
      this.cursor = new Cursor(this);
    },

    init: SM.event(function () {
      this.children.push(this.tileGrid);
      this.children.push(this.cursor);
    }),

    update: SM.event(function (dtime, inputSources) {
      inputSources.forEach(input => {
        if (input.INPUT_TYPE === "keyboard") {

          if (input.W){
            this.cursor.position.y += 32;
          }
          if (input.A) {
            this.cursor.position.x -= 32;
          }
          if (input.S) {
            this.cursor.position.y -= 32;
          }
          if (input.D) {
            this.cursor.position.x += 32;
          }

        }
      });
    }),
  }]);
});
