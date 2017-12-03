const Sequelize = require('sequelize');
const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');

const sequelizeConfig = require('../../config').sequelize;
const sequelize = new Sequelize(sequelizeConfig);

const ERROR_CODE = 1;
const SUCCESS_CODE = 0;
const ENCODE = 'utf-8';
const FILE_NAME = 'migration.sql';
const FILE_PATH = resolve(`scripts/migrations/${FILE_NAME}`);

fs.readFile(FILE_PATH, ENCODE, (error, file) => {
  if (error) {
    console.log(`Erro on read file ${FILE_NAME}`, error);
  }
  sequelize.query(file)
    .then(() => {
      console.log(chalk.green('Migration finished!'));
      process.exit(SUCCESS_CODE);
    })
    .catch(error => {
      console.log(chalk.red('Error on migration!'), error);
      process.exit(ERROR_CODE);
    });
}); 