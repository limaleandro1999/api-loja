var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var db = require('../queries');

router.get('/api/vendas-por-vendedor', db.getVendasPorVendedor);
router.get('/api/clientes-por-produto/:id', db.getClientesPorProduto);
router.get('/api/produtos-mais-vendidos', db.getProdutosMaisVendidos);

module.exports = router;
