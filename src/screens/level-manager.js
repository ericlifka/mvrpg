SM.DefineModule('mvrpg/screens/level-manager', function (require) {
  const GameEntity = require('pxlr/core/game-entity');
  const Cursor = require('mvrpg/components/cursor');
  const grassSprite = require('mvrpg/tiles/basic-grass');

  return SM.DefineClass([GameEntity, {

    constructor(parent, dimensions) {
      this.dimensions = dimensions;
      this.cursor = new Cursor(this);

      this.grid = [
        [ grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite() ],
        [ grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite() ],
        [ grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite() ],
        [ grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite() ],
        [ grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite(), grassSprite() ]
      ];
    },

    init: SM.event(function () {
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

    renderToFrame: SM.event(function (frame) {
      this.grid.forEach((row, y) => {
        row.forEach((sprite, x) => {
          sprite.renderToFrame(frame, x * 32, y * 32);
        });
      });
    })

  }]);
});
