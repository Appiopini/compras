const express = require ('express');
const pedidosController = require('./controller/pedidosController');

const router = express.Router();

router.get('/pedidos', pedidosController.getAll);
router.post('/pedidos', pedidosController.createPedido);


module.exports = router;
