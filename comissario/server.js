const chalk = require('chalk');
const app = require('./src/app');
const config = require('./config');
const PORT = config.port;

app.listen(PORT, () => {
    console.log(chalk.green.bold(`Comissário is listening at port ${PORT}`));
});