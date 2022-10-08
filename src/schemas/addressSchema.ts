import Joi from "joi";


const addressSchema = Joi.object({
    street: Joi.string().required(),
    number: Joi.number().required(),
    district: Joi.string().required(),
    nickname: Joi.string().required()
})

export default addressSchema;