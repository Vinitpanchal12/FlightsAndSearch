'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('Airports', [
    //   {
    //    name: 'a1',
    //    cityId: 1,
    //    address:null,
    //    createdAt: new Date(),
    //    updatedAt: new Date()
    //   },
    //   {
    //     name: 'a2',
    //     cityId: 1,
    //     address:null,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //    },
    //    {
    //     name: 'a3',
    //     cityId: 1,
    //     address:null,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //    },
    //    {
    //     name: 'a1',
    //     cityId: 2,
    //     address:null,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //    }
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
