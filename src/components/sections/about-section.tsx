import Link from 'next/link'
import React from 'react'
import { Others } from '../svgs'
import Image from 'next/image'

type AboutSectionProps = {
    hideImg?: boolean
}

export const AboutSection = ({ hideImg = false }: AboutSectionProps) => {
    return (
        <section className='relative mx-auto flex max-w-[95rem] flex-col gap-12 px-5 py-20 font-semibold text-white lg:gap-24 xl:flex-row xl:py-44 2xl:gap-48'>
            {!hideImg && (
                <Image
                    src={Others.DotsRight}
                    alt='Dots Right'
                    className='pointer-events-none absolute -top-7 right-6 sm:right-12 2xl:right-0'
                />
            )}

            <div className='flex max-w-3xl flex-col'>
                <span className='pb-6 font-inter text-xl text-green-300'>
                    About Us
                </span>
                <span className='text-balance font-slab text-xl leading-normal md:text-[2rem]'>
                    We are a passionate team of experts who deliver innovative,
                    high-quality software solutions.
                </span>
                <span className='pt-3 font-inter text-base font-normal text-gray-100 md:text-xl'>
                    Aurora Tech is your software development partner committed
                    to creating exceptional solutions through open
                    communication, flexibility, and technological expertise. We
                    collaborate closely with clients to understand their vision
                    and deliver innovative products using the latest
                    technologies.
                </span>
            </div>
            <div className='flex shrink-0 flex-col xl:self-end'>
                <span className='pb-6 font-slab text-xl md:text-[2rem]'>
                    For Any Further Discussion <br /> or Questions
                </span>
                <span className='font-inter text-sm font-normal text-gray-100'>
                    Send to us on Email
                </span>
                <Link
                    href='mailto:info@auroratech.me'
                    target='_blank'
                    className='group flex items-center justify-between gap-4 rounded-md font-inter text-2xl font-medium leading-normal text-green-300 underline outline-none ring-green-300 ring-offset-blue duration-300 hover:text-green-500 focus-visible:ring-2 focus-visible:ring-offset-2 active:text-[#152F26] md:text-[2.5rem] xl:gap-16'
                >
                    info@auroratech.me
                    {Others.Arrow(
                        'duration-300 group-hover:-translate-x-7 group-active:-translate-x-7 max-md:w-7',
                        'duration-300 group-hover:fill-green-500 group-active:fill-[#152F26]',
                    )}
                </Link>
            </div>
        </section>
    )
}
