import express from 'express'
import routes  from './routes/index'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/', routes)


export default app
