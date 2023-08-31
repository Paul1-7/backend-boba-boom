"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "menus",
      [
        {
          id: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          name: "BOBA BOO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          name: "BUBBLE WAFFLES",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("menus", null, {});
  },
};
