import Image from 'next/image'
import React from 'react'
import { Others } from '../svgs'

export const IntroSection = () => {
    return (
        <section className='mx-auto flex max-w-[82.1rem] flex-col-reverse items-center gap-14 py-20 xl:flex-row xl:py-40'>
            <div className='flex flex-col gap-7 pl-5 pr-5 sm:pl-10 sm:pr-10 xl:pr-0 2xl:pl-0'>
                <h1 className='flex flex-col font-slab text-4xl font-semibold leading-tight text-green-300 sm:text-[4rem]'>
                    <span>Welcome</span>
                    <span>to Aurora Tech</span>
                </h1>
                <span className='font-inter text-base font-medium text-White sm:text-xl'>
                    Customized and state-of-the-art software solutions. <br />
                    Bridging the gap between your vision and reality with Aurora
                    Tech, your trusted partner in creating beautiful websites
                    and captivating mobile apps. We empower ambitious businesses
                    to conquer the digital landscape. Are you ready to unlock
                    the full potential of your digital presence? {`We're`} here
                    to help.
                </span>
            </div>

            <Image
                src={Others.Aurora}
                alt='Aurora'
                className='pointer-events-none'
            />
        </section>
    )
}
