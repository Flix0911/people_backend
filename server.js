require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PeopleRouter = require('./controllers/people')

const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))


//routes
app.use('/people', PeopleRouter)

app.get('/', (req, res) => {
    res.send('hello world')
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))