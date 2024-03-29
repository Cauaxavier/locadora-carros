import joi from 'joi'

export default joi.object({
    name: joi.string().min(3).required().messages({
        'string.min': 'Name must have at least 3 characters.',
        'string.base': 'Name must be text type.',
        'string.empty': 'Name cannot be empty.',
        'any.required': 'Name is required.'
    }),

    email: joi.string().email().required().messages({
        'string.email': 'Email invalid.',
        'string.empty': 'Email cannot be empty.',
        'string.base': 'Email must be text type.',
        'any.required': 'Email is required.'
    }),

    cpf: joi.string().length(11).required().messages({
        'string.base': 'Cpf must be text type.',
        'string.length': 'Cpf must have 11 characters.',
        'string.empty': 'Cpf cannot be empty.',
        'any.required': 'Cpf is required.'
    }),
    
    password: joi.string().min(6).required().messages({
        'string.empty': 'Password cannot be empty.',
        'string.base': 'Password must be text type.',
        'any.required': 'Password is required.',
        'string.min': 'Password must have at least 6 characters.'
    }),
})