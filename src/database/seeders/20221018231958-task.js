/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tarefas', [{
      descricao: 'Atividade física da tarde',
      tipoTarefa: 'Musculação',
      UserId: 1,
    },
    {
      descricao: 'Estudo de campo',
      tipoTarefa: 'Estudo',
      UserId: 1,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});
  },
};
