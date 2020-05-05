module.exports = function ( sequelize, DataTypes )
{
    var Doctor = sequelize.define( "Doctor", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    } );

    Doctor.associate = function ( models )
    {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Doctor.hasMany( models.Patient, {
            onDelete: "cascade"
        } );
    };

    return Doctor;
};