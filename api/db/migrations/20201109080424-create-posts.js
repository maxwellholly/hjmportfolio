module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(
        queryInterface.createTable("Posts", {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          content: {
            type: Sequelize.STRING(5000),
            allowNull: false,
          },
          img: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        })
      ),

  down: (queryInterface) => queryInterface.dropTable("Posts"),
};
