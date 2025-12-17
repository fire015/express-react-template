import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelize.js";

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

export default User;
