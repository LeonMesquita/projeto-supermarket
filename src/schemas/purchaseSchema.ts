import joi from 'joi';


const purchaseSchema = joi.object({
    total_price: joi.number().required(),
    address_id: joi.number().required()
})

export default purchaseSchema;