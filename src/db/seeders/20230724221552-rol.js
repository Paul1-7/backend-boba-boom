module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("roles", [
      {
        id: "a3a8446c-eb67-4472-9ea5-2dcc9dc80c22", // Generate a new UUIDv4 for the ID
        nombre: "Admin",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7f746fc1-aaac-4e45-b27c-43df201299f3",
        nombre: "Gerente Comercial",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "27f9e845-7e01-4266-b43b-f2f8376774c7",
        nombre: "Asesor de Ventas",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "06489e80-e26c-40d0-b2bf-55e80d76cdb7",
        nombre: "Gerente General",
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Add more seed data as needed
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
