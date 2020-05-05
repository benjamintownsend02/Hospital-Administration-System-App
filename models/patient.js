module.exports = function ( sequelize, DataTypes )
{
  var Patient = sequelize.define( "Patient", {


    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [ 1 ]
    },
    medicalHistory: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [ 5 ]
    }



  } );

  Patient.associate = function ( models )
  {
    Patient.belongsTo( models.Doctor, {
      foreignKey: {
        allowNull: false
      }
    } )
  }


  return Patient;
};

