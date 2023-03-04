const Task = require("../models/Task");

// Listar tareas
const findAllTasks = async (req, res) => {
  const result = await Task.find();
  res.status(200).json(result);
};

// Agregar tarea
const addTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false, // Si envia dato done entonces lo usa y sino lo deja false
  });
  const result = await newTask.save();
  res.status(200).json(result);
};

// Filtrar tarea por ID
const findTask = async (req, res) => {
  const result = await Task.findById(req.params.id);
  res.status(200).json(result);
};

// Filtrar tarea por ID
const findAllDoneTasks = async (req, res) => {
  const result = await Task.find({ done: true });
  res.status(200).json(result);
};

// Eliminar tarea
const deleteTask = async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);
  res.status(200).send(`Tarea "${result.title}" Eliminada`);
};

// Actualizar tarea
const updateTask = async (req, res) => {
  const result = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send(`Tarea "${result.title}" actualizada`);
};

module.exports = {
  findAllTasks,
  addTask,
  findTask,
  findAllDoneTasks,
  deleteTask,
  updateTask
};
