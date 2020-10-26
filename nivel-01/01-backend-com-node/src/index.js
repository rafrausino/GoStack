const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos: HTTPs
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
  * Tipos de parâmetros
  * 
  * Query Params: Filtros e paginação
  * Route Params: Identificaqr recurso (Atualizar/Deletar)
  * Request Body: Conteúdo na hora criar ou editar um recurso (JSON)
  */

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json(["Projeto 1", "Projeto 2"]);
})

app.post('/projects', (request, response) => {
  const { title, owner } = request.body; 

  console.log(title);
  console.log(owner);
  return response.json(["Projeto 1", "Projeto 2", 'projeto 3'])
})

app.put("/projects/:id", (request, response) => {

  const { id } = request.params;

  console.log(id)

  return response.json(["Projeto 4", "Projeto 5", "projeto 6"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 5", "Projeto 2"]);
});


app.listen(3333, () => {
  console.log('🚀 Back-end started')
});

