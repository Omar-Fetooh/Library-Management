import Joi from 'joi'

const authorSchema = Joi.object({
    name: Joi.string().required(),
    bio: Joi.string(),
    birthDate: Joi.date(),
    books: Joi.array().items(Joi.string()),
})

export default authorSchema