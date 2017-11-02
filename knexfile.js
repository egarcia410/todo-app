// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todos'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
