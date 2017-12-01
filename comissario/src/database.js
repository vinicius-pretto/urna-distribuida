const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelizeConfig = require('../config').sequelize;

let database = null;

const loadModels = (sequelize) => {
    const dir = path.resolve('src/models');
    let models = [];

    fs.readdirSync(dir).forEach((file) => {
        const modelDir = path.join(dir, file);
        const model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    return models;
}

module.exports = () => {
    if (!database) {
        const sequelize = new Sequelize(sequelizeConfig);

        database = {
            sequelize,
            Sequelize,
            models: {}
        }
        database.models = loadModels(sequelize);

        sequelize
            .sync()
            .done((database) => database);
    }
    return database;
}