require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const PORT = process.env.PORT || 4999

const app = express()
app.use(
    cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }),
);

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error.message)
    }
}

start()