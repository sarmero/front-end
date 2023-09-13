
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
    logo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "logo",
      autoIncrement: false
    },
    cup: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cup",
      autoIncrement: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "league",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const LeagueModel = sequelize.define("league_model", attributes, options);

  LeagueModel.associate = function (models) {
    LeagueModel.belongsTo(models.users_model, {
      foreignKey: 'user_id'
    });

    LeagueModel.hasMany(models.calendar_model, {
      foreignKey: 'league_id'
    });

    LeagueModel.hasMany(models.club_model, {
      foreignKey: 'league_id'
    });

  };

  return LeagueModel;
};