/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Bruno landim',
      email: 'brunolandim13@hotmail.com',
      senha: '131506',
      endereco: 'Qs 07 rua 212 casa 02',
      dataNascimento: '13/04/1994',
    },
    {
      nome: 'Rafael landim',
      email: 'rafaellandim13@hotmail.com',
      senha: '131506',
      endereco: 'Qs 07 rua 212 casa 02',
      dataNascimento: '13/04/1994',
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
