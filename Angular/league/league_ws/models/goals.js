
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
    player_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "player_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "player_model"
      }
    },
    goals: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "goals",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "goals",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const GoalsModel = sequelize.define("goals_model", attributes, options);
  
GoalsModel.associate = function (models) {
	GoalsModel.belongsTo(models.calendar_model, {
      foreignKey:'calendar_id'
    });

	GoalsModel.belongsTo(models.player_model, {
      foreignKey:'player_id'
    });

};

return GoalsModel;
};