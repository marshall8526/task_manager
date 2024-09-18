
const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('get req');
}

const getTask = (req, res) => {
    //res.send(`get req ${req.params.id}`);
    res.json({ id: req.params.id });
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
       res.status(400).json(error)
    }
}

const deleteTask = (req, res) => {
    res.send(`del req ${req.params.id}`);
}

const updateTask = (req, res) => {
    res.send(`put req ${req.params.id}`);
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};