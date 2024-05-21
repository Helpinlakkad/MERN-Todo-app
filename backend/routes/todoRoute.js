const express = require("express");
const { getAllTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todoController");

const router = express.Router();

router.route("/getAllTodo").get(getAllTodo);

router.route("/createTodo").post(createTodo);

router.route("/updateTodo/:id").put(updateTodo);

router.route("/deleteTodo/:id").delete(deleteTodo);



module.exports = router;


