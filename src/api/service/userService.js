const { User } = require('../../database/models');
const { default: generateJWT } = require('../../jwt/generateJWT');

const list = async () => User.findAll();

const create = async (payload) => {
    const user = await User.findOne({ where: { email: payload.email } });

    if (user) {
        return null;
    }
    return User.create({ ...payload });
};

const update = async (payload, id) => {
    const user = await User.findOne({ where: { id } });

    if (!user) {
        return null;
    }
    return User.update({ ...payload }, { where: { id } });
};
const { SECRET } = process.env;
const login = async (email, password) => {
    const user = await User.findOne({ where: email });
    if (user.email !== email || user.password !== password) {
        return null;
    }
    const token = generateJWT({ email, password }, SECRET);
    return { user, token };
};

const destroy = async (id) => User.destroy({ where: id });

module.exports = {
    list,
    create,
    destroy,
    update,
    login,
};
