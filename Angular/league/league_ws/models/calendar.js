
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
    league_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "league_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "league_model"
      }
    },
    local_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "local_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "club_model"
      }
    },
    visitor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "visitor_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "club_model"
      }
    },
    Jornada: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "Jornada",
      autoIncrement: false
    },
    edition_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "edition_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "edition_model"
      }
    }
  };
  const options = {
    tableName: "calendar",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const CalendarModel = sequelize.define("calendar_model", attributes, options);
  
CalendarModel.associate = function (models) {
	CalendarModel.belongsTo(models.league_model, {
      foreignKey:'league_id'
    });

	CalendarModel.belongsTo(models.club_model, {
      foreignKey:'local_id'
    });

	CalendarModel.belongsTo(models.club_model, {
      foreignKey:'visitor_id'
    });

	CalendarModel.belongsTo(models.edition_model, {
      foreignKey:'edition_id'
    });

	CalendarModel.hasMany(models.goals_model, {
      foreignKey: 'calendar_id'
    });

	CalendarModel.hasMany(models.result_model, {
      foreignKey: 'calendar_id'
    });

};

return CalendarModel;
};