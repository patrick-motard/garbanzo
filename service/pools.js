var knex = require('knex');

module.exports = (config) => {
    var g = config.garbanzoDbConfig;
    return {
        garbanzo: knex({
            host: g.host,
            database: g.database,
            user: g.user,
            password: g.password
        })
    }
}
