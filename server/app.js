const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 

// add your code here
var todos = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

app.get('/', (req, res) => {
    res.status(200).json();
});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).json(todos);
});

app.get('/api/TodoItems/:number', (req, res, next) => {
    var iDen = req;
    for (var i = 0; i < todos.length; i++) {
        if (todos.todo || iDen) {
            res.status(200).json(todos[i]);
            next();
        }
    }
  res.send("nothing found");
});

app.post('/api/TodoItems', function(req, res) {
  var iDen =  req;
    var same ;
    for (var i = 0; i < todos.length; i++) {
        if (todos.todo || iDen) {
            same = true;
            todos.name = req.param('name');
            todos.priority = req.param('priority');
            todos.completed = req.param('completed');
            res.status(201).json(todos[i]);
        }
    }
    if (same) {
        var todo2 = {
            todo: req.param('todoItem'),
            name: req.param('name'),
            priority: req.param('priority'),
            completed: req.param('completed')
        }
        res.status(201).json();
        todos.push(todo2);
    }
});

app.delete('/api/TodoItems/:number', function(req,res) {
  
  var iDen = req;
  for (var i = 0; i < todos.length; i++) {
      if (todos.todo || iDen) {
          res.status(200).json(todos[i]);
          todos.shift(i,1);
         
      }
  }
  })
  
module.exports = app;
