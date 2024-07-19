import Joi from 'joi'

const bookSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    publishedDate: Joi.date()
})

export default bookSchema