# API Loja

Foram utilizados os módulos, express, para a geração da estrutura do projeto, pg-promise, utilizado para realizar a conexão com o banco de dados (PostgreSQL) e dotenv, para configuração das variáveis de ambiente. 

O módulo pg-promise foi escolhido no lugar do módulo pg, pois ele possibilita a utilização de promises, que no projeto tornou os códigos de consulta no banco e retorno dos dados com JSON mais simples e aparentemente mais limpos.

O uso do módulo dotenv foi utilizado principalmente para criar a variável de ambiente que contém as credenciais utilizadas no acesso ao banco de dados, tornando o código mais seguro não expondo tais credenciais e também facilitando a troca entre banco de desenvolvimento (quando a aplicação está rodando localmente) e o banco de produção (quando está rodando no ambiente de produção).

## Como receber os dados

Quais clientes mais compraram, filtrados por produtos:

```
https://young-escarpment-45012.herokuapp.com/api/clientes-por-produto/id-do-produto
```

O total de vendas de cada vendedor no mês:

```
https://young-escarpment-45012.herokuapp.com/api/clientes-por-produto/id-do-produto
```

O total de vendas de cada produto no mês

```
https://young-escarpment-45012.herokuapp.com/api/produtos-mais-vendidos
```
