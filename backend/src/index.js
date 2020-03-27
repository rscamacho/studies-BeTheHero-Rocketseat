const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
 * Rota / Recurso
*/

/** Métodos HTTP:
 * 
 * GET: buscar/listar informação no backend
 * POST: criar informação no backend
 * PUT: alterar informação no backend
 * DELETE: deletar informação no backend
 */

 /** Tipos de parâmetros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após "?" que servem para filtros, paginação, e outros
  * Route Params: parâmetros utilizados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  */

 /** BANCOS DE DADOS
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * No SQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users;
   * Query Builder: table('users').select('*')
   */