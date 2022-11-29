import {z} from 'zod';

export const studentSchema = z.object({
    body: z.object({
        name:z.string({required_error:'name is required !'}),
        age:z.string({required_error:'age is required !'}),
        major:z.string({required_error:'major is required !'}),
    }),
    params: z.object({
        id: z.string(),
      }),
})

export const teacherSchema = z.object({
    body: z.object({
        name:z.string({required_error:'name is required !'}),
    }),
    params: z.object({
        id: z.string(),
      }),
})

export const classroomSchema = z.object({
    body: z.object({
        name:z.string({required_error:'name is required !'}),
    }),
    params: z.object({
        id: z.string(),
      }),
})