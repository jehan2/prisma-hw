import {z} from 'zod';

export const loginSchema = z.object({
    body: z.object({
        username:z.string({required_error:'Username is required !'}),
        password:z.string({required_error:'password is required !'}),
        email:z.string({required_error:'email is required !'}),
    })
})
export const registerSchema = z.object({
    body: z.object({
        username:z
                .string({required_error:'Username is required !'})
                .min(3),
        password:z
                .string({required_error:'password is required !'})
                .min(5),
        email:z.string({required_error:'email is required !'}),
    })
})

