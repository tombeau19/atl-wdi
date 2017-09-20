const express = require('express');
const router = express.Router();
const data = require('../data.js')


/* INDEX TODOS */
router.get('/', (req,res) => {
    res.render('todos/index', {
      todos: data.seededTodos,
      numTotal: data.seededTodos.length
    });
});

/* NEW TODO */
router.get('/new', (req, res) => {
    res.render('todos/new');
})

router.post('/', (req, res) => {
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});

/* SHOW TODOS*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];
    if (!todo) {
        res.render('todos/show', {
            error: 'No to-do found'
        })
    }
    res.render('todos/show', {
        todo: todo
    })
    
})



  module.exports = router;