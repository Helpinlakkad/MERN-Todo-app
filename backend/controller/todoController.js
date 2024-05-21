const express = require("express");
const todoModel = require("../models/todoModel");

exports.getAllTodo = async (req, res, next) => {
  const data = await todoModel.find();
  res.status(200).send(data);
};

exports.createTodo = async (req, res, next) => {
  const item = await todoModel.create(req.body).then((data) => {
    res.status(201).send(data);
  });
};

exports.updateTodo = async (req, res, next) => {
  let item = await todoModel.findById(req.params.id);
  if (!item) {
    res.status(200).json({
      success: false,
    });
  }

  item = await todoModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.status(201).send(data);
    });
};

exports.deleteTodo = async (req, res, next) => {
  let item = await todoModel.findById(req.params.id);
  if (!item) {
    res.status(200).json({
      success: false,
    });
  }

  await todoModel.findByIdAndDelete(req.params.id).then(() => {
    res.json({
      success: true,
    })
  }).catch((err)=>{
    console.log(err)
  })
};
