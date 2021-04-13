// import express from 'express'
// import bodyParser from 'body-parser'
const express = require('express')
const bodyParser = require('body-parser')
//import { getAllPlants} from './controllers/plants'
const { getAllPlants} = require('./controllers/plants')
const app = express()
//app.use(express.static('public'))
app.get('/api/plants', getAllPlants)
app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})