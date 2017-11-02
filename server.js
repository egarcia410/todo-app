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
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'))
app.set('views', './public/views');
app.set('view engine', 'hbs');

// Display all todos
app.get('/todos', function(req, res){
    knex('todos')
    .then(function(todos){
        res.render('home', {todos: todos});
    }).catch(function(error) {
        console.log(error);
    });
});

// Creates a todo when submitted
app.post('/todos/add', function (req, res) {
    let description = req.body.description;
    knex('todos').insert({ description: description })
    .then(function(){
        res.redirect('/todos')
    }).catch(function(error) {
        console.log(error);
    });
});

app.post('/todos/delete/:id', function(req, res) {
    let id = req.params.id;
    knex('todos')
        .where('id', id)
        .del()
    .then(function() {
        res.redirect('/todos')
    }).catch(function(error) {
        console.log(error);
    });
})

// Marks a todo as completed
app.post('/todos/done/:id', function (req, res) {
    let id = req.params.id;
    knex('todos')
        .where('id', id)
        .update( 'completed', 'TRUE')
    .then(function() {
        res.redirect('/todos');
    }).catch(function(error) {
        console.log(error);
    });
});

app.listen(port, function() {
    console.log(`Creating magic on port ${port}`);
});