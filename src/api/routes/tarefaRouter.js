const { Router } = require('express');
const {
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
} = require('../controller/tarefasController');

const taskRouter = Router();

taskRouter.get('/tasks', getAllTask);
taskRouter.post('/tasks', createTask);
taskRouter.put('/tasks-update/:id', updateTask);
taskRouter.delete('/tasks/:id', deleteTask);

module.exports = taskRouter;
