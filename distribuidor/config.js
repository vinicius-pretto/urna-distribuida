module.exports = {
    port: process.env.DISTRIBUIDOR_PORT || 3002,
    comissarioURL: process.env.COMISSARIO_URL || 'http://localhost:3000',
    eleitorURL: process.env.ELEITOR_URL || 'http://localhost:3003'
}