module.exports = (sequelize, DataTypes) => {
    const Candidates = sequelize.define('candidates', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Candidates;
}