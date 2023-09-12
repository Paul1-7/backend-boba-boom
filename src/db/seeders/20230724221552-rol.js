module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("rols", [
      {
        id: "a3a8446c-eb67-4472-9ea5-2dcc9dc80c22",
        name: "Camarero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7f746fc1-aaac-4e45-b27c-43df201299f3",
        name: "Recepcionista de Órdenes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ca2b7744-0401-4d1e-9173-30f74b568e7d",
        name: "Administrador",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("rols", null, {});
  },
};
