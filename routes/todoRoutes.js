const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todoaController")

const router = require("express").Router()
router 
    .get("/", getTodos)
    .post("/add-todo", addTodo)
    .put("/update-todo/:todoId", updateTodo)
    .delete("/delete-todo/:todoId", deleteTodo)

    module.exports = router