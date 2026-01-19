import { readDB, writeDB } from "../models/todo.model.js";

/* CREATE TODO */
export const createTodo = (req, res) => {
  try {
    const db = readDB();
    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      completed: false
    };

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

/* GET ALL TODOS */
export const getAllTodos = (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

/* GET SINGLE TODO */
export const getTodoById = (req, res) => {
  try {
    const db = readDB();
    const todo = db.todos.find(t => t.id == req.params.todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
};

/* UPDATE TODO */
export const updateTodo = (req, res) => {
  try {
    const db = readDB();
    const index = db.todos.findIndex(t => t.id == req.params.todoId);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos[index] = { ...db.todos[index], ...req.body };
    writeDB(db);

    res.status(200).json(db.todos[index]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

/* DELETE TODO */
export const deleteTodo = (req, res) => {
  try {
    const db = readDB();
    const filteredTodos = db.todos.filter(t => t.id != req.params.todoId);

    if (filteredTodos.length === db.todos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos = filteredTodos;
    writeDB(db);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
