const express = require('express')
const wikiRoute = express.Router()
const { addPage } = require('../views')

wikiRoute.get('/', (req, res, next) => {
  res.send('retrieve all wiki pages')
})

wikiRoute.post('/', (req, res, next) => {
  console.dir(req.body)
  res.json(req.body)
})

wikiRoute.get('/add', (req, res, next) => {
  res.send(addPage())
})


module.exports = wikiRoute
