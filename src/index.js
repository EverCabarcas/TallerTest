import express from 'express'
import tallerRoutes from './routes/tallerRoutes.js'
import { errorHandler } from './middlewares/tallerErrorHandling.js'
import helmet from 'helmet'
import cors from 'cors'
import logger from './logger/logger.js'

const app = express()
const port = process.env.PORT || 3000

//Storage of task
export let ListOftask = [];

// Middleware to secure the app by setting various HTTP headers
app.use(helmet())

// Middleware to enable CORS with specific options
app.use(
  cors({
    origin: '*', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
)

// Middleware to parse JSON request bodies
app.use(express.json())


// Routes
app.use('/api', tallerRoutes)

// Middleware to handle errors
app.use(errorHandler)

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  logger.info(`Server is running at http://localhost:${port}`)
})
