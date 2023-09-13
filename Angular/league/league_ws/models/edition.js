
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
    edicion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "edicion",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "edition",
    comment: "",
    indexes: [],
timestamps: false,
   underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const EditionModel = sequelize.define("edition_model", attributes, options);
  
EditionModel.associate = function (models) {
	EditionModel.hasMany(models.calendar_model, {
      foreignKey: 'edition_id'
    });

};

return EditionModel;
};