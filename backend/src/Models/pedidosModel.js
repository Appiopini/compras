const connection = require('./connection');

const getAll = async () => {
  const [pedidos] = await connection.execute('SELECT * FROM pedidos');
  return pedidos;
};

const createPedido = async (pedido) => {

  const { title } = pedido;
  const dateUTC = new Date(Date.now()).toUTCString();
  
  const query = 'INSERT INTO pedidos(title, status, created_at) VALUE (?, ?, ?)';

  const [createdPedido] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return {insertId: createdPedido.insertId};

};


module.exports = {
  getAll,
  createPedido,
};