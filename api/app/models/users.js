module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
      {
      id: {
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID,
          validate: {
              isUUID: {args: 4, msg: "Id not valid, please try again"},
          },
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      },
      {}
  );

  return Users;
};
