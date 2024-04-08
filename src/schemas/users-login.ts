import joi from 'joi'

export default joi.object({

    email: joi.string().email().required().messages({
        'string.email': 'Email invalid.',
        'string.empty': 'Email cannot be empty.',
        'string.base': 'Email must be text type.',
        'any.required': 'Email is required.'
    }),
    
    password: joi.string().min(6).required().messages({
        'string.empty': 'Password cannot be empty.',
        'string.base': 'Password must be text type.',
        'any.required': 'Password is required.',
        'string.min': 'Password must have at least 6 characters.'
    }),
})