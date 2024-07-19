import { AppError, catchAsyncHandler } from '../../utils/error.js'
import Book from '../../../database/models/book.model.js'

export const addBook = catchAsyncHandler(async (req, res) => {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book Added Successfully", book })
})

export const getAllBooks = catchAsyncHandler(async (req, res) => {
    const books = await Book.find()

    res.status(200).json({ message: "Books feteched Successfully", books })
})

export const getBookById = catchAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.bookId)
    if (!book) throw new AppError('Book not found !', 404)

    res.json({ message: book })
})

export const updateBookById = catchAsyncHandler(async (req, res) => {
    const { title, content, author, publishedDate } = req.body;

    const book = await Book.findByIdAndUpdate(req.params.bookId, { title, content, author, publishedDate }, { new: true })
    if (!book) throw new AppError('Book not found !', 404)

    res.json({ message: "Book updated Successfully", book })
})

export const deleteBookById = catchAsyncHandler(async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    if (!book) throw new AppError('Book not found !', 404)

    res.json({ message: "Book Deleted Successfully" })
})