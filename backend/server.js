const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require("./todoList");


const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();


const connectionBase = process.env.MONGO_URL;

mongoose.connect(connectionBase)
        .then(() => console.log('Connected to the MongoDB')) 
        .catch((err) => console.error('Connection error:', err));


app.get("/getTodoList", (req, res) => {
    TodoModel.find({})
        .then((todoList) => res.json(todoList))
        .catch((err) => res.json(err));
});

app.post("/addTodoList", (req, res) => {
    TodoModel.create({ task: req.body.task })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});


app.post("/updateTodoList/:id", (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndUpdate(id, { task: req.body.task })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});


app.delete("/deleteTodoList/:id", (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

app.listen(3001, () => {
    console.log('Server running on 3001');
});
