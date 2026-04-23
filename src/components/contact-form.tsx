'use client'

import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactSchema } from '@/schema'
import { Textarea } from './ui/text-area'
import { sendMail } from '@/actions'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Magnetic } from './ui/magnetic'
import { useTranslations } from 'next-intl'

const INTENT_KEYS = ['webDev', 'mobileApp', 'uiUx', 'maintenance', 'other'] as const

export const ContactForm = () => {
    const [success, setSuccess] = useState(false)
    const [selectedIntent, setSelectedIntent] = useState<string | null>(null)
    const t = useTranslations('contact')

    const intents = INTENT_KEYS.map((key) => ({
        key,
        label: t(`intents.${key}`),
    }))

    const form = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: '', email: '', phoneNumber: '', subject: '', message: '' },
    })

    const handleIntentClick = (label: string) => {
        setSelectedIntent(label)
        form.setValue('subject', label, { shouldValidate: true })
    }

    const onSubmit = async (data: ContactSchema) => {
        const res = await sendMail(data)
        if (res.success) {
            form.reset()
            setSuccess(true)
            toast.success(t('successMessage'))
            setTimeout(() => setSuccess(false), 3000)
            return
        }
        return toast.error(res.error)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='grid grid-cols-1 gap-x-12 gap-y-6 font-inter sm:grid-cols-2 md:gap-x-28'
                >
                    {/* Intent Pills */}
                    <div className='flex flex-wrap gap-3 sm:col-span-2 mb-2'>
                        {intents.map(({ key, label }) => {
                            const isSelected = selectedIntent === label
                            return (
                                <button
                                    key={key}
                                    type='button'
                                    onClick={() => handleIntentClick(label)}
                                    className={[
                                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                                        isSelected
                                            ? 'bg-emerald-500 text-white border border-emerald-400 shadow-lg shadow-emerald-500/20'
                                            : 'border bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10',
                                    ].join(' ')}
                                >
                                    {label}
                                </button>
                            )
                        })}
                    </div>

                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white'>
                                    {t('name')}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('name')} {...field} />
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
                                <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white'>
                                    {t('email')}
                                </FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder={t('email')} {...field} />
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
                                <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white'>
                                    {t('phone')}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('phone')} {...field} />
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
                                <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white'>
                                    {t('subject')}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={t('subject')} {...field} />
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
                                <FormLabel className='text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white'>
                                    {t('body')}
                                </FormLabel>
                                <FormControl>
                                    <Textarea placeholder={t('body')} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className='flex items-center justify-center pt-4 sm:col-span-2'>
                        <Magnetic>
                            <motion.button
                                type='submit'
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98, y: 0 }}
                                disabled={form.formState.isSubmitting || success}
                                className='flex w-56 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-[#359976] dark:to-[#22604B] py-3 text-base font-extrabold leading-4 text-white outline-none transition-all duration-300 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] dark:shadow-none disabled:opacity-70 disabled:cursor-not-allowed'
                            >
                                {form.formState.isSubmitting ? (
                                    <><Loader2 className='animate-spin' size={18} />{t('sending')}</>
                                ) : success ? (
                                    <><CheckCircle2 size={18} />{t('sent')}</>
                                ) : (
                                    t('send')
                                )}
                            </motion.button>
                        </Magnetic>
                    </div>
                </form>
            </Form>
        </motion.div>
    )
}
