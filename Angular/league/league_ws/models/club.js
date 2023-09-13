
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
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name",
      autoIncrement: false
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
    logo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "logo",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "club",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ClubModel = sequelize.define("club_model", attributes, options);

  ClubModel.associate = function (models) {
    ClubModel.belongsTo(models.league_model, {
      foreignKey: 'league_id'
    });

    ClubModel.hasMany(models.calendar_model, {
      foreignKey: 'local_id'
    });

    ClubModel.hasMany(models.calendar_model, {
      foreignKey: 'visitor_id'
    });

    ClubModel.hasMany(models.player_model, {
      foreignKey: 'club_id'
    });

  };

  return ClubModel;
};