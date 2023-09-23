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
          password: "$2a$12$tJoTZ3pi2Rj8A/hMLYJL6OEnqKPGRggo8U0cGFgawxYLkr9MzzfC2",
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
