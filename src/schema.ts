import { z } from 'zod'

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Name must be at least 2 characters long',
        })
        .max(50, {
            message: 'Name must be at most 50 characters long',
        }),
    email: z.string().email({
        message: 'Invalid email address',
    }),
    phoneNumber: z.string().regex(/^01[0-2,5]{1}[0-9]{8}$/, {
        message: 'Invalid phone number',
    }),
    subject: z
        .string()
        .min(2, {
            message: 'Subject must be at least 2 characters long',
        })
        .max(50, {
            message: 'Subject must be at most 50 characters long',
        }),
    message: z
        .string()
        .min(10, {
            message: 'Message must be at least 10 characters long',
        })
        .max(2048, {
            message: 'Message must be at most 2048 characters long',
        }),
})

export type ContactSchema = z.infer<typeof contactSchema>
