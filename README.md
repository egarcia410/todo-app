# Todo App
Todo application using Node.js, Express, postrges, Knex.js, and handlebars

## Getting Started

### Prerequisites

* Install [Node](https://nodejs.org/en/download/)

1. Clone Repository:

        $ git clone https://github.com/egarcia410/todo-app.git

2. Change Directory:

        $ cd todo-app

3. Install Dependencies:

        $ npm install

4. Enter PostgreSQL shell

        $ psql

5. Inside PostgreSQL shell, create a database called `todos`

        =# CREATE DATABASE todos

6. Update your database

        $ knex migrate:latest

    **A table will be created in your database called todos**

7. Run Program:

        $ nodemon server.js


## Setting up database with Knex.js

### Prerequisites

* Install [Postgres](https://www.postgresql.org/download/)

* Install [Postres.app](https://postgresapp.com/)

* Initialize server in Postgres.app

1. Enter PostgreSQL shell

        $ psql

2. Inside PostgreSQL shell, create a database

        =# CREATE DATABASE <NAME_OF_DATABASE>

3. Install Knex.js and PostgreSQL driver inside working directory

        $ npm install --save knex pg

4. Create a new [knexfile](http://knexjs.org/#knexfile)

        $ knex init

    **A knexfile.js file will be created**

5. Configure [knexfile.js](http://knexjs.org/#knexfile) with appropriate database [client](http://knexjs.org/#Installation-client)

    Example using PostgreSQL configuration:

        module.exports = {
            development: {
                client: 'pg',
                connection: 'postgres://localhost/<NAME_OF_DATABASE>'
            },
            production: {
                client: 'postgresql',
                connection: process.env.DATABASE_URL
            }
        };

6. Create a new migration file

        $ knex migrate:make <MIGRATION_NAME>

    **A migrations folder will be created**

7. Configure migrations file with a `createTable` and `dropTable`

8. Update your database

        $ knex migrate:latest

    **A table will be created in your database**

9. Create `db` folder

        $ mkdir db

10. Create `knex.js` file inside `db` folder

        $ touch db/knex.js

11. Insert into `knex.js`:

        let environment = process.env.NODE_ENV || 'development';
        let config = require('../knexfile.js')[environment];
        module.exports = require('knex')(config);

    **acquires database client and connection**

12. Require the exported module in file where queries will be made

    Example:

        const knex = require('./db/knex');


