const express = require('express')
const mongoose = require('mongoose')
const app = express
const morgan = require('morgan')
const bookRouter = require('./routes/bookRouter')



app.use(express.json())
app.use(morgan('dev'))


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log(err)
    }
}

connectToDB()

app.use('/books', bookRouter)

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})