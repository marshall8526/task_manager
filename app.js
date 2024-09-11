const express = require('express');
const tasks_api = require('./routes/tasks_api');
const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasks_api);

const PORT = 3000;
app.listen(PORT, ()=>{console.log('listening on port 3000....')});