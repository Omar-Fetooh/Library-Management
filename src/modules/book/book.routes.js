import { Router } from 'express'
import {
    addBook,
    deleteBookById,
    getAllBooks,
    getBookById,
    updateBookById
} from './book.controllers.js'

const bookRouter = Router()


bookRouter.route('/').post(addBook).get(getAllBooks)

bookRouter.route('/:bookId').get(getBookById).patch(updateBookById).delete(deleteBookById)


export default bookRouter;