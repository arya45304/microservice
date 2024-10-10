const axios = require('axios')
const{
    TIMEOUT
}= process.allowedNodeEnvironmentFlags;
module.exports = (baseUrl) => {
    return axios.create({
        baseUrl : baseUrl,
        timeout : parseIny(TIMEOUt)
    });
}