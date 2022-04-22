const express = require('express');
const app = express()

app.use(express.json())

let bancoDeDados = {
  clientes: [],
  bebidas: [],
  comidas: [],
  pedidos: [],
}


app.get('/clientes', (_req, res) => {
  res.json(bancoDeDados.clientes)
})

app.post('/clientes', (req, res) => {
  bancoDeDados.clientes.push(req.body)
  res.status(201)
  res.send('')
})

app.get('/clientes/:id', (req, res) => {
  res.json(bancoDeDados.clientes[req.params.id])
})

app.put('/clientes/:id', (req, res) => {
  bancoDeDados.clientes[req.params.id] = req.body
  res.json(bancoDeDados.clientes[req.params.id])
})

app.patch('/clientes/:id', (req, res) => {
  bancoDeDados.clientes[req.params.id] = {
    ...bancoDeDados.clientes[req.params.id],
    ...req.body
  }
  res.json(bancoDeDados.clientes[req.params.id])
})

app.delete('/clientes/:id', (req, res) => {
  delete(bancoDeDados.clientes[req.params.id])
  res.status(204)
  res.send('')
})

app.get('/clientes/:id/pedidos', (req, res) => {
  const pedidos = bancoDeDados.pedidos.filter(pedido => pedido.id_cliente === Number(req.params.id))
  res.json(pedidos)
})


app.post('/pedidos', (req, res) => {
  bancoDeDados.pedidos.push(req.body)
  res.status(201)
  res.send('')
})

app.get('/pedidos', (req, res) => {
  res.json(bancoDeDados.pedidos)
})


app.listen(3000)
