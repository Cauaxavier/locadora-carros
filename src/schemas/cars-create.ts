import joi from 'joi'

export default joi.object({
    model: joi.string().required().messages({
        'string.base': 'Model must be text type.',
        'string.empty': 'Model cannot be empty.',
        'any.required': 'Model is required.'
    }),

    brand: joi.string().min(3).required().messages({
        'string.base': 'Brand must be text type.',
        'string.empty': 'Brand cannot be empty.',
        'any.required': 'Brand is required.'
    }),

    color: joi.string().required().messages({
        'string.base': 'Color must be text type.',
        'string.empty': 'Color cannot be empty.',
        'any.required': 'Color is required.'
    }),
   
})