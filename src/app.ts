import express from 'express'
import routes  from './routes/index'
import dotenv from 'dotenv'
if (process.env.NODE_ENVIRONMENT === 'development') {
  dotenv.config({ path: './dev.env' })
} else {
  // dotenv.config({ path: '.env.test' })
}

import { postgresSource } from './config/app-data-source'


const app = express()

postgresSource
  .initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization:", err)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/', routes)


export default app
