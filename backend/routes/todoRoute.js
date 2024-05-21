const express = require("express");
const { getAllTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todoController");

const router = express.Router();

router.route("/getAllTodo").get(getAllTodo);

router.route("/createTodo").post(createTodo);

router.route("/updateTodo").post(updateTodo);

router.route("/deleteTodo").post(deleteTodo);



module.exports = router;


