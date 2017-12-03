const chalk = require('chalk');
const app = require('./src/app');
const config = require('./config');
const CacheClient = require('./src/cache/client.cache');
const CandidateService = require('./src/candidates/candidate.service');
const cacheClient = new CacheClient();
const candidateService = new CandidateService(cacheClient);
const PORT = config.port;

async function bootstrap() {
    try {
        await candidateService.putCandidatesOnCache();
        await app.listen(PORT);
        console.log(chalk.gray.bold(`Administrador is listening at port ${PORT}`));    
    } catch(error) {
        console.log('Error on bootstrap', error);
    }   
}

bootstrap();