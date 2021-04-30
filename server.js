import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllPlants, getPlantsByName } from './controllers/plants'
import { getGardenByUser, addPlantToGarden } from './controllers/garden'

const app = express()

app.use(express.static('public'))
app.get('/api/plants', getAllPlants)
app.get('/api/plants/:name', getPlantsByName)
app.get('/api/garden/:user', getGardenByUser)
app.post('/api/garden', bodyParser.json(), addPlantToGarden)
app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
