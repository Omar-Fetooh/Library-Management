import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now()
    },
},
    {
        versionKey: false,
        timeStamps: true
    }
)

const Book = mongoose.model('book', bookSchema)

export default Book
