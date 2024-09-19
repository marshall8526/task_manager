const express = require('express');
const {
    getAllTasks,
    getTask, 
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/tasks_methods.js')
const asyncWrapper = require('../middleware/asyncWrapper')

const router = express.Router();

router.route('/').get(asyncWrapper(getAllTasks)).post(asyncWrapper(createTask));
router.route('/:id').get(asyncWrapper(getTask)).patch(asyncWrapper(updateTask)).delete(asyncWrapper(deleteTask));


module.exports = router;