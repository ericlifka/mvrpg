SM.DefineModule('mvrpg/game', function (require) {
  const GameEntity = require('pxlr/core/game-entity');

  const LevelManager = require('mvrpg/screens/level-manager');

  return SM.DefineClass([GameEntity, {
    constructor(dimensions) {
      this.dimensions = dimensions;
      this.levelManager = new LevelManager(this, this.dimensions);
    },

    init: SM.event(function () {
      this.children.push(this.levelManager);
    })
  }]);
});
