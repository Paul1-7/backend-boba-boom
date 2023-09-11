module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("wafflesOrdersDetail", {
      id: {
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      idOrder: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idFruit: {
        type: Sequelize.UUID,
        references: {
          model: "flavours",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      idCoating: {
        type: Sequelize.UUID,
        references: {
          model: "flavours",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      idTopping: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: "flavours",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      idMenu: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "menus",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idPrice: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wafflesOrdersDetail");
  },
};
