var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'garbanzo'
        }
    }),
    Promise = require('bluebird');

function getUsers(){
    return knex.select().table('users')
    .then(x => console.log(x))
    .catch(err => console.log(err));
}
module.exports = function(){
    getUsers();
}
getUsers();
