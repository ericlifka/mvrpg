SM.DefineModule('main', function (require) {
    const RunLoop = require('util/run-loop');
    const PIXI = require('pixi');

    let renderer = new PIXI.WebGLRenderer(800, 600);
    renderer.backgroundColor = "0xffffff";
    document.body.appendChild(renderer.view);

    let stage = new PIXI.Container();
    window.stage = stage;
    window.renderer = renderer;


    // let bunny = null;
    let box = new PIXI.Graphics();
    // box.drawShape(new PIXI.Rectangle(0, 0, 100, 200));

    // box.drawPolygon([
    //     550, 100, // Starting x, y coordinates for the star
    //     570, 150, // Star is drawn in a clockwork motion
    //     630, 155,
    //     585, 195,
    //     600, 250,
    //     550, 220,
    //     500, 250,
    //     515, 195,
    //     470, 155,
    //     530, 150,
    //     550, 100
    // ]);
    box.position.x = 50;
    box.position.y = 50;

    box.beginFill("0x85e3f2", 1.0);
    box.lineStyle(2, "0x000000", 1.0);
    box.drawPolygon([
        25, 25,
        0, 225,
        100, 275,
        50, 175,
        25, 25
    ]);
    box.endFill();

    box.beginFill("0xffe0bd", 1.0);
    box.lineStyle(3, "0x000000", 1.0);
    box.drawPolygon([
        10, 0,
        5, 55,
        50, 65,
        30, 10,
        10, 0
    ]);
    box.endFill();

    box.beginFill('0xff602b', 1.0);
    box.lineStyle(0);
    box.drawPolygon([
        10, 0,
        25, 25,
        35, 70,
        55, 110,
        75, 125,
        55, 20,
        10, 0
    ]);

    stage.addChild(box);

    let loop = new RunLoop(function (dtime) {
        // bunny.rotation += 0.01;
        // box.position.x += 5;
        // box.position.y += 5;
        // if (box.position.x > renderer.width) {
        //     box.position.x = 0;
        // }
        // if (box.position.y > renderer.height) {
        //     box.position.y = 0;
        // }
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