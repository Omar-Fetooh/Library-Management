import mongoose from 'mongoose'

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    books: {
        type: [mongoose.Types.ObjectId],
        ref: 'book'
    }
},
    {
        versionKey: false,
        timeStamps: true
    }
)

const Author = mongoose.model('author', authorSchema)

export default Author
