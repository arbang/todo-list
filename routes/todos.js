const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

//@route POST api/todos
//@desc   create a todo
//@access private
router.post('/', async (req, res) => {
  const { task } = req.body;
  try {
    let todo = await Todo.findOne({ task });
    if (todo) {
      return res.status(400).json({ msg: 'Task already exists' });
    }
    todo = new Todo({ task });
    todo.completed = false;
    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route GET api/todos
//@desc   get all todos
//@access private
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route DELETE api/todos/:id
//@desc   Delete todo
//@access private
router.delete('/:id', async (req, res) => {
  try {
    let todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(400).send('Todo not found');
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//@route PUT api/todos/:id
//@desc   Update a todo
//@access private
router.put('/:id', async (req, res) => {
  const { task, completed } = req.body;

  //build todo object
  const todoFields = {};
  if (task) todoFields.task = task;
  if (completed) todoFields.completed = completed;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(400).send('Todo not found');
    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: todoFields },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
