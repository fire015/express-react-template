const { DataTypes, Model } = require("sequelize");
const sequelize = require("./sequelize");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
