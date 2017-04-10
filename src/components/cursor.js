SM.DefineModule('mvrpg/components/cursor', function (require) {
  const GameEntity = require('pxlr/core/game-entity');
  const cursorSprite = require('mvrpg/sprites/tiles/cursor');

  return SM.DefineClass([GameEntity, {
    constructor() {
      this.sprite = cursorSprite();
      this.position = {x: 0, y: 0};
    },

    renderToFrame: SM.event(function (frame) {
      this.sprite.renderToFrame(frame, this.position.x, this.position.y, 10);
    })
  }]);
});
