const {
    create, list, update, destroy, login,
} = require('../service/userService');

const getAll = async (__req, res) => {
    try {
        const allUsers = await list();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};

const loginUser = (req, res) => {
    try {
        const user = login(req.body);
        if (user == null) {
            return res.status(401).json({ message: 'Tarefa não encontrado' });
        }
        return req.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error' });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await create(req.body);
        if (newUser == null) {
            return res.status(401).json({ message: 'Email já cadastrado' });
        }
        return res.status(201).json(newUser);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await update(req.body, id);
        if (updated == null) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        return res.status(200).json(updated);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        await destroy(req.params);
        return res.send();
    } catch (e) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
};
module.exports = {
    getAll,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
};
