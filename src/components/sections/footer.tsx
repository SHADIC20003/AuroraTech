import React from 'react'
import { Others } from '../svgs'
import Image from 'next/image'
import { ContactForm } from '../contact-form'
import { FooterLink } from '../nav/footer-link'
import { FOOTER_CONTACT, FOOTER_LINKS } from '@/lib/constants'

export const Footer = () => {
    return (
        <div className='relative'>
            <Image
                src={Others.ContactBg}
                alt='Footer'
                className='absolute inset-0 z-0 w-full object-cover'
            />

            <div className='relative z-10'>
                <section className='mx-auto max-w-screen-md px-5 pt-12'>
                    <div className='flex flex-col items-center justify-center pb-14'>
                        <span className='font-inter text-lg font-semibold text-green-300 sm:text-xl'>
                            Contact Us
                        </span>
                        <span className='font-slab text-3xl font-semibold text-White sm:text-[2.5rem]'>
                            Get in Touch
                        </span>
                    </div>

                    <ContactForm />
                </section>

                <footer className='mx-auto flex max-w-screen-2xl flex-col px-5 pt-12 md:pt-24 lg:pt-36'>
                    <div className='flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between'>
                        <div className='space-y-6 max-lg:text-center'>
                            <div className='flex items-center gap-2 max-lg:justify-center'>
                                <Image
                                    src={Others.Logo}
                                    alt='Logo'
                                    width={64}
                                    height={91}
                                />
                                <span className='font-slab text-4xl leading-normal text-green-300 sm:text-[3.5625rem]'>
                                    Aurora Tech
                                </span>
                            </div>

                            <p className='max-w-xl text-balance font-inter text-base text-gray-100 sm:text-xl'>
                                With our cutting-edge technology, we will weave
                                our creativity with your project to deliver you
                                exceptional results. Ready to unlock the full
                                potential of your digital presence? {`We're`}{' '}
                                here to help. <br />
                                Headquartered in Egypt, providing software
                                solutions globally
                            </p>
                        </div>
                        <div className='grid gap-8 sm:grid-cols-2 sm:gap-16'>
                            <div className='max-lg:text-center'>
                                <span className='font-slab text-xl font-semibold text-gray-100 sm:text-2xl'>
                                    Useful Links
                                </span>
                                <ul className='flex flex-col gap-2 pt-6 lg:pt-8'>
                                    {FOOTER_LINKS.map((link, index) => (
                                        <FooterLink key={index} {...link} />
                                    ))}
                                </ul>
                            </div>

                            <div className='max-lg:text-center'>
                                <span className='font-slab text-xl font-semibold text-gray-100 sm:text-2xl'>
                                    Contact
                                </span>
                                <ul className='flex flex-col gap-2 pt-6 lg:pt-8'>
                                    {FOOTER_CONTACT.map((link, index) => (
                                        <FooterLink key={index} {...link} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='w-full pb-12 pt-20 text-center text-sm'>
                        <span className='font-inter text-gray-300'>
                            &copy; {new Date().getFullYear()} Aurora Tech. All
                            Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
