const {
    create, list, update, destroy,
} = require('../service/tarefasServise');

const getAllTask = async (__req, res) => {
    try {
        const allTasks = await list();
        return res.status(200).json(allTasks);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error' });
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = await create(req.body);
        return res.status(201).json(newTask);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await update(req.body, id);
        if (updated == null) {
            return res.status(401).json({ message: 'Tarefa não encontrado' });
        }
        return res.status(200).json(updated);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};

const deleteTask = async (req, res) => {
    try {
        await destroy(req.params);
        return res.send();
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};
module.exports = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
};
