var knex = require('knex')({
        host: '127.0.0.1:3306',
        user: 'root',
        password: '',
        database: 'garbanzo'
    }),
    Promise = require('bluebird');

module.exports = function(){
    knex.select().table('users')
    .then(x => console.log(x));
}
