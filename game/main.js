SM.DefineModule('main', function (require) {
    const RunLoop = require('util/run-loop');
    const PIXI = require('pixi');

    let renderer = new PIXI.WebGLRenderer(800, 600);
    document.body.appendChild(renderer.view);

    let stage = new PIXI.Container();

    let bunny = null;

    let loop = new RunLoop(function (dtime) {
        bunny.rotation += 0.01;
        renderer.render(stage);
    });

    PIXI.loader.add('bunny', 'assets/bunny.gif').load(function (loader, resources) {
        bunny = new PIXI.Sprite(resources.bunny.texture);
        bunny.position.x = 400;
        bunny.position.y = 300;
        bunny.scale.x = 2;
        bunny.scale.y = 2;
        stage.addChild(bunny);

        loop.start();
    });
});