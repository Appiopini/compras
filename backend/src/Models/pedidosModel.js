const connection = require('./connection');

const getAll = async () => {
  const [pedidos] = await connection.execute('SELECT * FROM pedidos');
  return pedidos;
};


module.exports = {
  getAll
};