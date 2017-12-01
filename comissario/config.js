module.exports = {
    port: process.env.COMISSARIO_PORT || 3000,
    sequelize: {
        database: process.env.DB_DATABASE || 'urna_distribuida',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'toor',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: process.env.LOGGING || false,
        operatorsAliases: false,
        define: {
            underscored: true
        }
    }
}