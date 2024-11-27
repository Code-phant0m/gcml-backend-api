const { cancerPredictHandler, getPredictHistoryHandler } = require('./handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: cancerPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes : 1000000
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: getPredictHistoryHandler
  }
]
 
module.exports = routes;