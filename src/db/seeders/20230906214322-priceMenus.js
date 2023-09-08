"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pricesMenus",
      [
        {
          id: "0c3f24aa-3484-45da-afd6-bb7d7393f63b",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 8,
        },
        {
          id: "e6d058ec-a8c8-40dc-8b00-fbfa81838d3c",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 12,
        },
        {
          id: "6ebb9736-0a18-43db-ad3b-f07301d003fe",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 16,
        },
        {
          id: "afe3d1f4-b20a-4f9c-8f13-5768b67bf5af",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 10,
        },
        {
          id: "7f6476d7-0601-4e6f-976e-8c9001c07631",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 13,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pricesMenus", null, {});
  },
};
