SM.DefineModule('main', function (require) {
    const RunLoop = require('util/run-loop');
    const PIXI = require('util/pixi');

    let loop = new RunLoop(function (dtime) {
        console.log(dtime);
    });

    loop.start();

});