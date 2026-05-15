const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.json({ message: 'Task added' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
