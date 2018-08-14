var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var db = require('../queries');

router.get('/api/vendas-por-vendedor', db.getVendasPorVendedor); //retorna no response um json com as informacoes do numero de vendas agrupadas por vendedores 
router.get('/api/clientes-por-produto/:id', db.getClientesPorProduto); //retorna no response um json com as informacoes dos clientes que mais compraram um produto e o numero de compras 
router.get('/api/produtos-mais-vendidos', db.getProdutosMaisVendidos); //retorna no response um json com as informacoes dos produtos mais vendidos no mês e o total de vendas

module.exports = router;
