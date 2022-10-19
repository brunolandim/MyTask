const { Tarefa, User } = require('../../database/models');

const list = async () => Tarefa.findAll({ include: User });

const create = async (payload) => Tarefa.create({ ...payload });

const update = async (payload, id) => {
    const tarefa = await Tarefa.findOne({ where: { id } });

    if (!tarefa) {
        return null;
    }
    return Tarefa.update({ ...payload }, { where: { id } });
};

const destroy = async (id) => Tarefa.destroy({ where: id });

module.exports = {
    list,
    create,
    destroy,
    update,
};
