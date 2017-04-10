SM.DefineModule('mvrpg/components/cursor', function (require) {
  const GameEntity = require('pxlr/core/game-entity');
  const cursorSprite = require('mvrpg/sprites/tiles/cursor');

  return SM.DefineClass([GameEntity, {
    constructor() {
      this.sprite = cursorSprite();
    },

    renderToFrame: SM.event(function (frame) {
      this.sprite.renderToFrame(frame, 0, 0, 10);
    })
  }]);
});
