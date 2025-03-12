import express from 'express'

const app = express()

//port number declared
const port = 8080

//to test
app.get('/', (req, res) => {
  res.json('Hello (from server)')
})

app.listen(port, () => {
  console.log('Connected to server on port: ', port)
})