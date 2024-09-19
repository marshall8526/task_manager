const Task = require('../models/task')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(error)
    }

}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task === null) {
            res.status(404).send('not found')
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).send('server error')
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (task === null) {
            return res.status(404).send('not found')
        }
        res.status(200).send();
    } catch (error) {
        res.status(500).send('server error');
    }

}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (task === null) {
            return res.status(404).send('not found')
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).send('server error');
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};