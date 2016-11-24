SM.DefineModule('main', function (require) {
    const RunLoop = require('util/run-loop');

    let loop = new RunLoop(function (dtime) {
        console.log(dtime);
    });

    loop.start();

});