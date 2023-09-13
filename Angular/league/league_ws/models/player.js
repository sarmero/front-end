
const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "nextval(\"Jugador_id_seq\"::regclass)",
      comment: null,
      primaryKey: true,
      field: "id",
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
    },
    club_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "club_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "club_model"
      }
    },
    age: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "age",
      autoIncrement: false
    },
    position_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "position_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "position_model"
      }
    }
  };
  const options = {
    tableName: "player",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PlayerModel = sequelize.define("player_model", attributes, options);
  
PlayerModel.associate = function (models) {
	PlayerModel.belongsTo(models.person_model, {
      foreignKey:'person_id'
    });

	PlayerModel.belongsTo(models.club_model, {
      foreignKey:'club_id'
    });

	PlayerModel.belongsTo(models.position_model, {
      foreignKey:'position_id'
    });

	PlayerModel.hasMany(models.goals_model, {
      foreignKey: 'player_id'
    });

};

return PlayerModel;
};