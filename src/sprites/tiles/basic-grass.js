SM.DefineModule('mvrpg/tiles/basic-grass', function (require) {
  const Sprite = require('pxlr/core/sprite');

  const pixels = [
    ["#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62", null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#729E62"],
    ["#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62", "#729E62"]];

  return () => Sprite.newFromColorSheet({pixels});
});
