const { Router } = require('express');
const {
    createUser,
    getAll,
    updateUser,
    deleteUser,
    loginUser,
} = require('../controller/userController');

const userRouter = Router();

userRouter.get('/users', getAll);
userRouter.post('/login', loginUser);
userRouter.post('/users', createUser);
userRouter.put('/users-update/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;
