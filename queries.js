var promise = require('bluebird');

var options = {
    //adicionando opcoes
    promiseLib : promise
};

var pgp = require('pg-promise')(options);
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'loja',
    user: 'postgres',
    password: 'root'
};
var db = pgp(connection);

module.exports = {
    getVendasPorVendedor: getVendasPorVendedor,
    getClientesPorProduto: getClientesPorProduto,
    getProdutosMaisVendidos: getProdutosMaisVendidos
};

function getVendasPorVendedor(req, res, next){
    var now = new Date();
	var mesEAno = now.getFullYear() +'-'+ (now.getMonth()+1); //mês e ano atual
	const sql = "select vendedor, count(vendas.id) as total_de_vendas from vendas where data_venda between '"+ mesEAno +"-01' and '"+ mesEAno +"-30' group by vendedor order by total_de_vendas desc;";
    db.any(sql)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'sucess',
                    data : data,
                    message : 'retornado as vendas por vendedor do mês'
                });
        })
        .catch(function (err){
            return next(err);
        });
}

function getClientesPorProduto(req, res, next){
    var produtoId = parseInt(req.params.id); // transforma em int, para evitar sql injection
    const sql = 'select nome, count(venda_id) as total_de_produtos from vendas_produtos inner join vendas on vendas_produtos.venda_id = vendas.id inner join clientes on vendas.cliente_id = clientes.id where vendas_produtos.produto_id = '+ produtoId +' group by clientes.nome order by count(venda_id) desc;';
    db.any(sql)
        .then(function(data){
            res.status(200)
                .json({
                    status: 'sucess',
                    data: data,
                    message: 'retornado os clientes que mais compraram o produto'
                });
        })
        .catch(function(err){
            return next(err);
        });
}

function getProdutosMaisVendidos(req, res, next){
    var now = new Date();
	var mesEAno = now.getFullYear() +'-'+ (now.getMonth()+1); //mês e ano atual
    const sql = "select descricao, count(produto_id) as total_de_vendas from vendas_produtos inner join produtos on vendas_produtos.produto_id = produtos.id inner join vendas on vendas_produtos.venda_id = vendas.id where data_venda between '"+ mesEAno +"-01' and '"+ mesEAno +"-30' group by descricao order by total_de_vendas desc;";
    db.any(sql)
        .then(function(data){
            res.status(200)
                .json({
                    status: 'sucess',
                    data: data,
                    message: 'retorno dos produtos mais vendidos do mês'
                });
        })
        .catch(function(err){
            return next(err);
        });
}
