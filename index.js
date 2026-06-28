const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from inside a container!',
    hostname: require('os').hostname(),
    time: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' })
})

app.get('/ready', (req, res) => {
  res.json({ status: 'ready' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})