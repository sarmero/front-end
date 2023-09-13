
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
    position: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "position",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "position",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PositionModel = sequelize.define("position_model", attributes, options);
  
PositionModel.associate = function (models) {
	PositionModel.hasMany(models.player_model, {
      foreignKey: 'position_id'
    });

};

return PositionModel;
};