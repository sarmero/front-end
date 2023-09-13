
const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    usrname: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "usrname",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "person_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "person_model"
      }
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  
UsersModel.associate = function (models) {
	UsersModel.belongsTo(models.person_model, {
      foreignKey:'person_id'
    });

	UsersModel.hasMany(models.league_model, {
      foreignKey: 'user_id'
    });

};

return UsersModel;
};