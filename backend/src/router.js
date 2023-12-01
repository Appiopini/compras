const express = require ('express');
const pedidosController = require('./controller/pedidosController');

const router = express.Router();

router.get('/pedidos', pedidosController.getAll);


module.exports = router;
