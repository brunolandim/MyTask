const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    static associate(models) {
      models.Tarefa.belongsTo(models.User, { foreingKey: 'UserId' });
    }
  }
  Tarefa.init({
    descricao: DataTypes.STRING,
    tipoTarefa: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas',
    timestamps: false,
  });
  return Tarefa;
};
