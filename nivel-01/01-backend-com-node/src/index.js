const express = require('express');

const app = express();

/**
 * Métodos: HTTPs
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

app.get('/projects', (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
})

app.post('/projects', (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", 'projeto 3'])
})

app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 4", "Projeto 5", "projeto 6"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 5", "Projeto 2"]);
});


app.listen(3333, () => {
  console.log('🚀 Back-end started')
});

