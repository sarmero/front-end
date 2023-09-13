
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
    rolle: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rolle",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "rolle",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const RolleModel = sequelize.define("rolle_model", attributes, options);
  
RolleModel.associate = function (models) {
	RolleModel.hasMany(models.person_model, {
      foreignKey: 'rolle_id'
    });

};

return RolleModel;
};