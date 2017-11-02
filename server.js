const express = require('express');
const app = express();
const knex = require('./db/knex');
// const knex = require('knex')({
//     client: 'pg',
//     version: '7.2',
//     connection: {
//         host: '127.0.0.1',
//         user: '',
//         password: '',
//         database: 'todos'
//     }
// });
const hbs = require('hbs');
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'))
app.set('views', './public/views');
app.set('view engine', 'hbs');

app.get('/todos', function(req, res){
    knex('todos').then(function(todos){
        res.render('home', {todos: todos});
    });
});

app.get('/todos/add', function (req, res) {
    res.render('add');
});

app.post('/todos/add', function (req, res) {
    let description = req.body.description;
    knex('todos').insert({ description: description }).then(function(result){
        res.redirect('/todos')
    })
});

app.get('/todos/done/:id', function (req, res) {
    res.render('home', {})
});

app.listen(port, function() {
    console.log(`Creating magic on port ${port}`);
});