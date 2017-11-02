# Setting up database with Knex.js

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
                connection: 'postgres://localhost/<NAME OF DATABASE>'
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