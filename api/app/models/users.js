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
              validate: {
                  len: {
                      args: [3, 500],
                      msg: "Ask title must be at least 3 characters in length",
                  },
              },
          },
          password: {
              type: DataTypes.STRING,
              unique: {args: true, msg: "Sorry, this email is already in use"},
              allowNull: {args: false, msg: "Email is required"},
          },
      },
      {}
  );

  return Users;
};
