const express = require('express');
const tasks_api = require('./routes/tasks_api');
const app = express();
const connectDB = require('./dataBase/connect')
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/tasks', tasks_api);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, ()=>{console.log('listening on port 3000....')});
    } catch (error) {
        console.log(error);
    }
}

start();