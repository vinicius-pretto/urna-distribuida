const chalk = require('chalk');
const app = require('./src/app');
const config = require('./config');
const CacheClient = require('./src/cache/client.cache');
const VoterService = require('./src/voters/voter.service');
const CandidateService = require('./src/candidates/candidate.service');

const cacheClient = new CacheClient();
const voterService = new VoterService(cacheClient);
const candidateService = new CandidateService(cacheClient);

const PORT = config.port;

async function bootstrap() {
    try {
        await voterService.putVotersOnCache();
        await candidateService.putCandidatesOnCache();
        await app.listen(PORT);
        console.log(chalk.cyan.bold(`Distribuidor is listening at port ${PORT}`));    
    } catch (error) {
        console.log(chalk.red.bold('Erro on bootstrap', error));
    }
};

bootstrap();