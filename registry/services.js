var serviceUsers = require(__base + '/service/user');

module.exports = function (app, pools) {
    var services = {
        user: serviceUsers(app, pools)
    };

    app.set('services', services);
    return app;
};
