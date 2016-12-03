SM.DefineModule('main', function (require) {
    const RunLoop = require('util/run-loop');
    const PIXI = require('pixi');

    let renderer = new PIXI.WebGLRenderer(800, 600);
    document.body.appendChild(renderer.view);

    let stage = new PIXI.Container();
    window.stage = stage;
    window.renderer = renderer;


    // let bunny = null;
    let box = new PIXI.Graphics();
    box.beginFill("0x555555", 1.0);
    box.drawShape(new PIXI.Rectangle(0, 0, 100, 200));
    stage.addChild(box);

    let loop = new RunLoop(function (dtime) {
        // bunny.rotation += 0.01;
        box.position.x += 5;
        box.position.y += 5;
        if (box.position.x > renderer.width) {
            box.position.x = 0;
        }
        if (box.position.y > renderer.height) {
            box.position.y = 0;
        }
        renderer.render(stage);
    });

    loop.start();

    // PIXI.loader.add('bunny', 'assets/bunny.gif').load(function (loader, resources) {
    //     bunny = new PIXI.Sprite(resources.bunny.texture);
    //     bunny.position.x = 400;
    //     bunny.position.y = 300;
    //     bunny.scale.x = 2;
    //     bunny.scale.y = 2;
    //     stage.addChild(bunny);

    //     loop.start();
    // });
});