
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
    calendar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "calendar_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "calendar_model"
      }
    },
    local: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "local",
      autoIncrement: false
    },
    visitor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "visitor",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "result",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ResultModel = sequelize.define("result_model", attributes, options);
  
ResultModel.associate = function (models) {
	ResultModel.belongsTo(models.calendar_model, {
      foreignKey:'calendar_id'
    });

};

return ResultModel;
};