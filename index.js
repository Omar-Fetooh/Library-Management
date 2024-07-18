import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

process.on('uncaughtException', (err) => {
    console.log('error')
})

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