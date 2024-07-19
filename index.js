import express from 'express'
import './database/db.Connection.js'
import bookRouter from './src/modules/book/book.routes.js'
import authorRouter from './src/modules/author/author.routes.js'

process.on('uncaughtException', (err) => {
    console.log('error')
})
const app = express()
const port = 3000

app.use(express.json())


app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.use('*', (req, res, next) => {
    next(new AppError(`${req.originalUrl}  Not found`, 404))
})

app.use((err, req, res, next) => {
    const { message, statusCode } = err;
    res.status(statusCode || 500).json({ message })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


process.on('unhandledRejection', (err) => {
    console.log('error')
})