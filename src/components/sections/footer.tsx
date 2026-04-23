'use client'

import { Others } from '../svgs'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { FOOTER_CONTACT, FOOTER_LINKS } from '@/lib/constants'
import { useTranslations } from 'next-intl'

// ─── Brand colours for social icons ────────────────────────────────────────
const SOCIAL_BRAND: Record<string, string> = {
    Facebook: '#1877F2',
    Linkedin: '#0A66C2',
    Instagram: '#E4405F',
}
const SOCIAL_KEYS = new Set(Object.keys(SOCIAL_BRAND))

// ─── Useful-Links item with expanding green underline ───────────────────────
const AnimatedLink = ({
    href,
    label,
    isExternal,
    isDownload,
    downloadName,
}: {
    href: string
    label: string
    isExternal?: boolean
    isDownload?: boolean
    downloadName?: string
}) => (
    <motion.li
        initial='rest'
        whileHover='hover'
        animate='rest'
        className='relative inline-block max-lg:mx-auto'
    >
        {isExternal || isDownload ? (
            <a
                href={href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                download={isDownload ? (downloadName ?? true) : undefined}
                className='font-inter text-base font-semibold leading-none text-slate-600 dark:text-gray-300 outline-none sm:text-lg'
            >
                {label}
            </a>
        ) : (
            <Link
                href={href as any}
                className='font-inter text-base font-semibold leading-none text-slate-600 dark:text-gray-300 outline-none sm:text-lg'
            >
                {label}
            </Link>
        )}
        {/* Green line expands from centre */}
        <motion.span
            variants={{ rest: { width: 0 }, hover: { width: '100%' } }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='absolute -bottom-0.5 start-1/2 block h-px -translate-x-1/2 bg-green-400'
        />
    </motion.li>
)

// ─── Contact item – social icons get brand-colour hover ─────────────────────
const ContactItem = ({
    href,
    text,
    icon,
}: {
    href: string
    text: string
    icon?: any
}) => {
    const isSocial = SOCIAL_KEYS.has(text)
    const brandColor = SOCIAL_BRAND[text]

    return (
        <li>
            <motion.a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 font-inter text-base font-semibold text-slate-600 dark:text-gray-300 outline-none sm:text-lg max-lg:justify-center'
                whileHover={isSocial ? { color: brandColor, scale: 1.04 } : { color: '#86efac' }}
                transition={{ duration: 0.2 }}
            >
                {icon && <Image src={icon} alt={text} />}
                {text}
            </motion.a>
        </li>
    )
}

// ─── Faint world-map SVG with pulsing Egypt dot ──────────────────────────────
const WorldMap = () => (
    <svg
        viewBox='0 0 1000 500'
        xmlns='http://www.w3.org/2000/svg'
        className='pointer-events-none absolute inset-0 h-full w-full'
        aria-hidden
        style={{ opacity: 0.045 }}
    >
        <path fill='#22c55e' d='M72,55 L105,42 L155,38 L220,45 L268,58 L290,80 L295,115 L275,148 L255,168 L232,182 L210,198 L185,208 L162,205 L140,190 L118,175 L95,155 L78,130 L65,105 Z' />
        <path fill='#22c55e' d='M210,205 L240,200 L255,215 L248,228 L228,232 L212,222 Z' />
        <path fill='#22c55e' d='M195,245 L240,235 L272,240 L292,260 L300,290 L295,325 L280,365 L255,405 L230,430 L205,438 L185,420 L172,390 L165,350 L168,305 L178,270 Z' />
        <path fill='#22c55e' d='M275,15 L330,8 L360,18 L355,45 L325,55 L290,48 Z' />
        <path fill='#22c55e' d='M442,48 L480,38 L520,35 L558,42 L572,58 L565,78 L548,92 L525,102 L500,108 L475,105 L455,95 L442,78 Z' />
        <path fill='#22c55e' d='M480,22 L510,15 L528,28 L518,42 L495,45 L478,35 Z' />
        <path fill='#22c55e' d='M430,52 L445,45 L452,55 L445,68 L432,65 Z' />
        <path fill='#22c55e' d='M455,112 L510,105 L558,112 L590,132 L600,162 L598,200 L590,240 L572,282 L548,318 L520,348 L498,368 L478,365 L460,340 L448,300 L440,258 L438,210 L445,165 Z' />
        <path fill='#22c55e' d='M598,270 L610,258 L618,278 L612,308 L600,318 L592,300 Z' />
        <path fill='#22c55e' d='M572,105 L630,98 L658,108 L665,135 L648,162 L622,172 L598,165 L578,148 L568,128 Z' />
        <path fill='#22c55e' d='M558,38 L650,25 L740,18 L820,22 L880,35 L918,55 L925,85 L910,118 L880,145 L842,165 L800,178 L755,188 L705,192 L660,185 L620,170 L590,148 L572,125 L562,98 L558,68 Z' />
        <path fill='#22c55e' d='M655,155 L695,148 L720,155 L728,178 L718,210 L695,235 L672,240 L652,222 L642,195 L645,168 Z' />
        <path fill='#22c55e' d='M768,155 L810,148 L840,158 L848,178 L832,198 L805,205 L778,198 L762,178 Z' />
        <path fill='#22c55e' d='M880,72 L895,65 L905,75 L900,90 L886,95 L876,84 Z' />
        <path fill='#22c55e' d='M798,225 L830,218 L855,228 L858,245 L835,252 L805,248 Z' />
        <path fill='#22c55e' d='M842,205 L860,200 L870,210 L865,222 L848,222 Z' />
        <path fill='#22c55e' d='M762,278 L828,265 L880,268 L908,285 L918,312 L910,348 L885,372 L845,380 L800,372 L768,348 L752,318 L755,292 Z' />
        <path fill='#22c55e' d='M930,338 L942,328 L950,342 L942,358 L928,355 Z' />
        <motion.circle cx={527} cy={150} r={6} fill='#22c55e' animate={{ r: [6, 14, 6], opacity: [1, 0, 1] }} transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }} />
        <circle cx={527} cy={150} r={4} fill='#4ade80' />
    </svg>
)

// ─── Back-to-top button ──────────────────────────────────────────────────────
const BackToTop = () => (
    <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.12, backgroundColor: 'rgba(74,222,128,0.15)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className='flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-white/15 text-slate-600 dark:text-gray-400 outline-none ring-green-400 focus-visible:ring-2'
        aria-label='Back to top'
    >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
            <path d='M12 19V5M5 12l7-7 7 7' />
        </svg>
    </motion.button>
)

// ─── Main component ──────────────────────────────────────────────────────────
export const Footer = () => {
    const t = useTranslations('footer')
    const tNav = useTranslations('nav')

    const year = new Date().getFullYear()

    return (
        <div className='relative'>
            <Image
                src={Others.ContactBg}
                alt='Footer'
                className='absolute inset-0 z-0 w-full object-cover'
            />

            <div className='relative z-10'>
                {/* CTA strip */}
                <section className='mx-auto max-w-screen-md px-5 pt-24 lg:pt-32 flex flex-col items-center gap-6 text-center'>
                    <span className='font-inter text-lg font-semibold text-green-300 sm:text-xl drop-shadow-[0_1px_8px_rgba(53,153,118,0.5)]'>
                        {t('contactUs')}
                    </span>
                    <span className='font-slab text-3xl font-semibold text-slate-900 dark:text-white sm:text-[2.5rem] dark:[filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.5))]'>
                        {t('getInTouch')}
                    </span>
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                        <Link
                            href='/contact'
                            className='inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-[#359976] dark:to-[#22604B] px-8 py-3.5 text-base font-extrabold text-white shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] dark:shadow-none transition-shadow duration-300'
                        >
                            {t('startProject')}
                        </Link>
                    </motion.div>
                </section>

                {/* Footer proper */}
                <footer className='mx-auto flex max-w-screen-2xl flex-col px-5 pt-12 md:pt-24 lg:pt-36'>
                    <div className='border-t border-slate-300 dark:border-white/5' />

                    <div
                        aria-hidden
                        className='pointer-events-none absolute bottom-0 start-1/2 h-96 w-full max-w-3xl -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white dark:bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)] border-t border-emerald-100/50 dark:border-none shadow-[inset_0_20px_40px_rgba(0,0,0,0.02)] dark:shadow-none'
                    />

                    <div className='flex flex-col items-center justify-center gap-y-4 pt-12 lg:flex-row lg:justify-between lg:pt-16'>
                        {/* ── Start column: branding + description + world map ── */}
                        <div className='relative space-y-6 max-lg:text-center'>
                            <WorldMap />

                            <div className='flex items-center gap-3 max-lg:justify-center'>
                                <Image src={Others.Logo} alt='Logo' width={72} height={102} />
                                <span className='font-slab text-5xl leading-normal text-slate-900 dark:text-white sm:text-[4rem]'>
                                    <span className='text-green-300'>Aurora </span>
                                    <span className='bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent'>Tech</span>
                                </span>
                            </div>

                            <p className='max-w-xl text-balance font-inter text-base font-medium sm:text-xl text-slate-700 dark:text-slate-200'>
                                {t('description')}
                            </p>
                        </div>

                        {/* ── End column: links + contact ── */}
                        <div className='grid gap-8 sm:grid-cols-2 sm:gap-16'>
                            {/* Useful Links */}
                            <div className='max-lg:text-center'>
                                <span className='font-slab text-xl font-semibold text-slate-900 dark:text-gray-100 sm:text-2xl'>
                                    {t('usefulLinks')}
                                </span>
                                <ul className='flex flex-col items-start gap-3 pt-6 max-lg:items-center lg:pt-8'>
                                    {FOOTER_LINKS.map((link, i) => (
                                        <AnimatedLink
                                            key={i}
                                            href={link.href}
                                            label={
                                                link.isExternal || link.isDownload
                                                    ? link.externalText!
                                                    : tNav(link.key as any)
                                            }
                                            isExternal={link.isExternal}
                                            isDownload={link.isDownload}
                                            downloadName={
                                                link.isDownload ? 'Aurora Tech Portfolio.pdf' : undefined
                                            }
                                        />
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className='max-lg:text-center'>
                                <span className='font-slab text-xl font-semibold text-slate-900 dark:text-gray-100 sm:text-2xl'>
                                    {t('contact')}
                                </span>
                                <ul className='flex flex-col gap-3 pt-6 lg:pt-8'>
                                    {FOOTER_CONTACT.map((item, i) => (
                                        <ContactItem key={i} {...item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright + Back to Top */}
                    <div className='flex w-full items-center justify-center gap-3 pb-12 pt-20'>
                        <span className='font-inter text-sm text-slate-600 dark:text-gray-300'>
                            {t('copyright', { year })}
                        </span>
                        <BackToTop />
                    </div>
                </footer>
            </div>
        </div>
    )
}
