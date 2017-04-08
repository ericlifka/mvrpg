SM.DefineModule('mvrpg/game', function (require) {
  const GameEntity = require('pxlr/core/game-entity');
  const TileGrid = require('mvrpg/screens/tile-grid');

  return SM.DefineClass([GameEntity, {
    constructor(dimensions) {
      this.dimensions = dimensions;
      this.tileGrid = new TileGrid();
    }
  }]);
});
