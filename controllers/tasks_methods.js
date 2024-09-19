const Task = require('../models/task')
const {createCustomErr} = require('../errors/customErr');


const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks })
}


const getTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (task === null) {
        console.log('created')
        return next(createCustomErr('not found', 404));
    }
    res.status(200).json({ task });
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
}

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (task === null) {
        return next(createCustomErr('not found', 404));
    }
    res.status(200).send();

}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (task === null) {
        return next(createCustomErr('not found', 404));
    }
    res.status(200).json({ task });
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};