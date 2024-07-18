import { Router } from "express";
import {
    addAuthor,
    deleteAuthorById,
    getAllAuthors,
    getAuthorById,
    updateAuthorById
} from "./author.controllers.js";

const authorRouter = Router();

authorRouter.route('/').get(getAllAuthors).post(addAuthor);
authorRouter.route('/:authorId').get(getAuthorById).patch(updateAuthorById).delete(deleteAuthorById)


export default authorRouter;