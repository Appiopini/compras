const pedidosModel = require('../models/pedidosModel');

const getAll = async (_request, response) => {

  const pedidos = await pedidosModel.getAll();
  
  return response.status(200).json( pedidos );
};

const createPedido = async (request, response) => {
  const createdPedido = await pedidosModel.createPedido(request.body);
  return response.status(201).json(createdPedido);
};


module.exports = {
  getAll,
  createPedido,
};