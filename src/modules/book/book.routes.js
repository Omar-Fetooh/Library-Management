import { Router } from 'express'
import {
    addBook,
    deleteBookById,
    filterBooks,
    getAllBooks,
    getBookById,
    updateBookById
} from './book.controllers.js'
import bookSchema from './book.validation.js'
import validate from '../../middlewares/validation.middleware.js'
const bookRouter = Router()

bookRouter.route('/filters').get(filterBooks)

bookRouter.route('/').post(validate(bookSchema), addBook).get(getAllBooks)

bookRouter.route('/:bookId').get(getBookById).patch(updateBookById).delete(deleteBookById)


export default bookRouter;