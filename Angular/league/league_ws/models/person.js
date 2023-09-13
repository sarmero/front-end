
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
    fist_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fist_name",
      autoIncrement: false
    },
    last_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name",
      autoIncrement: false
    },
    rolle_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rolle_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "rolle_model"
      }
    },
    cedula: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cedula",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "person",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PersonModel = sequelize.define("person_model", attributes, options);
  
PersonModel.associate = function (models) {
	PersonModel.belongsTo(models.rolle_model, {
      foreignKey:'rolle_id'
    });

	PersonModel.hasMany(models.player_model, {
      foreignKey: 'person_id'
    });

	PersonModel.hasMany(models.users_model, {
      foreignKey: 'person_id'
    });

};

return PersonModel;
};