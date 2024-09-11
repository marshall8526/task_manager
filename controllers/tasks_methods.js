const getAllTasks = (req, res) => {
    res.send('get req');
}

const getTask = (req, res) => {
    //res.send(`get req ${req.params.id}`);
    res.json({ id: req.params.id });
}

const createTask = (req, res) => {
    //res.send('post req');
    res.json(req.body);
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