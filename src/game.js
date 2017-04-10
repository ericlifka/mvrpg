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
    })
  }]);
});
