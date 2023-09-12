"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: "ca2b7744-0401-4d1e-9173-30f74b568e7d",
          user: "admin",
          password: "$2y$10$y0hPV7HzH2UcQlZpoB2B3OL6Qqi4WAnO9wNX9i6aqt94RifjEDLmu",
          idRol: "ca2b7744-0401-4d1e-9173-30f74b568e7d",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
