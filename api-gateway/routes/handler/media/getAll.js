const apiAdapter = require('..//./apiAdaptert');
const {
    URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
    try{
        const media = await api.get('/media', req.body);
        return res.json(media.data1);
    }catch (error) {

        if(error.code === 'ECONNREFUSEF') {
            return res.status(500).json({status : 'error', message : 'service unavailable'});
        }

        const {status, data} = error.response;
        return res.status(status).json(data);
    }

}