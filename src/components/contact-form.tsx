'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactSchema } from '@/schema'
import { Textarea } from './ui/text-area'
import { sendMail } from '@/actions'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export const ContactForm = () => {
    const form = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
        },
    })

    const onSubmit = async (data: ContactSchema) => {
        const res = await sendMail(data)
        if (res.success) {
            form.reset()
            return toast.success('Message sent successfully!')
        }

        return toast.error(res.error)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-x-12 gap-y-4 font-inter sm:grid-cols-2 md:gap-x-28'
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-White'>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Name' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-White'>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type='email'
                                    placeholder='Email'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='phoneNumber'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-White'>
                                Phone Number
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Phone Number' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-White'>
                                Subject
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Subject' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem className='pt-2 sm:col-span-2'>
                            <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-White'>
                                Body
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder='Body' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className='flex items-center justify-center pt-4 sm:col-span-2'>
                    <button
                        type='submit'
                        className='flex w-56 items-center justify-center rounded-md bg-green-500 py-2 text-base font-extrabold leading-4 text-blue outline-none ring-green-300 ring-offset-blue duration-300 hover:bg-[#152F26] focus-visible:ring-2 focus-visible:ring-offset-2 active:bg-[#0F2921] disabled:opacity-50 sm:text-lg'
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting && (
                            <Loader2 className='mr-2 animate-spin' />
                        )}
                        Send
                    </button>
                </div>
            </form>
        </Form>
    )
}
