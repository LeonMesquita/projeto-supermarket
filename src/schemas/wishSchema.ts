import Joi from "joi";


const wishSchema = Joi.object({
    productId: Joi.number().required(),
    amount: Joi.number().required()
})

export default wishSchema;