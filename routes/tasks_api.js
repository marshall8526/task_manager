const express = require('express');
const {
    getAllTasks,
    getTask, 
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/tasks_methods.js')

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;