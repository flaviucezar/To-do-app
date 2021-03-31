const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'developer',
        password: 'Flace19661995',
        database: 'todos'
    }
});