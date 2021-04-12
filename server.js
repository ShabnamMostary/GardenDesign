import express from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(express.static('public'))
app.get('/api/plants', getAllPlants)
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})