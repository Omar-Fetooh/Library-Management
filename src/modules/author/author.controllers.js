import { catchAsyncHandler, AppError } from '../../utils/error.js'
import Author from '../../../database/models/author.model.js'

export const addAuthor = catchAsyncHandler(async (req, res) => {
    const author = await Author.create(req.body);
    res.status(201).json({ message: "Author Added Successfully", author })
})

export const getAllAuthors = catchAsyncHandler(async (req, res) => {
    const authros = await Author.find();
    res.status(200).json({ message: "Data fetched Successfully", authros })
})

export const getAuthorById = catchAsyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.authorId).populate('books')
    if (!author) throw new AppError("author not found !", 404)

    res.json({ message: author })
})

export const updateAuthorById = catchAsyncHandler(async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.authorId, req.body, { new: true })
    if (!author) throw new AppError("author not found !", 404);

    res.json({ message: author })
})

export const deleteAuthorById = catchAsyncHandler(async (req, res) => {
    const author = await Author.findByIdAndDelete(req.params.authorId)
    if (!author) throw new AppError("author not found !", 404);

    res.json({ message: "Author Deleted Successfully" })
})