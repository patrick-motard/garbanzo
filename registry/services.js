var serviceUsers = require(__base + '/service/user');
module.exports = function (app, pools) {
    // console.log(serviceUsers(pools));
    // console.log(pools.garbanzo);
    var services = {
        user: serviceUsers(pools.garbanzo)
    };

    app.set('services', services);
    return app;
};
