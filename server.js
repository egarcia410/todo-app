const express = require('express');
let port = 8080;

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.redirect('/todos/add')
});

app.get('/todos', function(req, res){
    res.render('index', {})
});

app.post('/todos/add', function (req, res) {
    let description = req.body.description;
    
    res.redirect('/todos')
});

app.get('/todos/done/:id', function (req, res) {
    res.render('index', {})
});

app.listen(port, `Creating magic on port ${port}`);