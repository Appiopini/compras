const pedidosModel = require('../Models/pedidosModel');

const getAll = async (request, response) => {

  const pedidos = await pedidosModel.getAll();
  
  return response.status(200).json( pedidos );
};

module.exports = {
  getAll
};