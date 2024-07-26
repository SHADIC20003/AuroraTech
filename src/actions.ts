'use server'

import { contactSchema, ContactSchema } from './schema'
import { z } from 'zod'
import { CreateEmailOptions, Resend } from 'resend'

type CustomErrorMessages = {
    ZodError?: string
    Error: string
}

type ReturnValue =
    | {
          success: true
      }
    | {
          success: false
          error: string
      }

function getErrorMessage(
    error: unknown,
    messages: CustomErrorMessages = {
        ZodError: undefined,
        Error: 'Something went wrong. Please try again.',
    },
) {
    if (error instanceof z.ZodError) {
        return (
            messages.ZodError ?? error.errors.map((e) => e.message).join(', ')
        )
    }

    if (error instanceof Error) {
        return error.message
    }

    return messages.Error as string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendMail = async (data: ContactSchema): Promise<ReturnValue> => {
    try {
        const { email, message, name, phoneNumber, subject } =
            contactSchema.parse(data)

        const mailOptions: CreateEmailOptions = {
            from: process.env.EMAIL!,
            to: process.env.EMAIL!,
            subject: `${subject} - ${name} - ${new Date().toLocaleString()}`,
            html: `From: ${name} - ${email} - ${phoneNumber}\n\n${message}`,
        }

        const res = await resend.emails.send(mailOptions)
        if (res.error) {
            return { success: false, error: res.error.message }
        }

        return { success: true }
    } catch (error) {
        return { success: false, error: getErrorMessage(error) }
    }
}
