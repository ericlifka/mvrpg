// Import PIXI.js into the simple-web-module namespace.
SM.DefineModule('pixi', function (require) {
    if (!window.PIXI) {
        throw new Error("PIXI.js is required for this utility module (https://github.com/pixijs/pixi.js)");
    }

    return window.PIXI;
});
