const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./cms-backend/config/db')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/posts', require('./cms-backend/routes/postRoutes'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
