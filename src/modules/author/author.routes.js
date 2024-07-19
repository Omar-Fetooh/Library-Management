import { Router } from "express";
import {
    addAuthor,
    deleteAuthorById,
    filterAuthors,
    getAllAuthors,
    getAuthorById,
    updateAuthorById
} from "./author.controllers.js";

const authorRouter = Router();


authorRouter.get('/filters', filterAuthors)
authorRouter.route('/').get(getAllAuthors).post(addAuthor);
authorRouter.route('/:authorId').get(getAuthorById).patch(updateAuthorById).delete(deleteAuthorById)


export default authorRouter;