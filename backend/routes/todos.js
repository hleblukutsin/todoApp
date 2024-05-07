const express = require('express');
const router = express.Router();

const dataBase = require('../services/database');
const todos = require('../repositories/todos');

router.get('/', async (req, res) => {
  try {
    const todosList = await todos.getTodosList();
    res.send(todosList);
  } catch (e) {
    console.error(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    console.log(body.name && body.text !== undefined);
    if (body.name !== undefined && body.text !== undefined) {
      const todosList = await todos.addTodo(body);
      console.log(todosList);
      res.send(todosList);
    }
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
