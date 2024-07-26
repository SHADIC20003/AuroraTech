'use client'

import React, { useEffect, useState } from 'react'
import { Header } from '@/components/ui/header'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useInterval } from '@/hooks/use-interval'
import { MILLISECONDS, SERVICES } from '@/lib/constants'
import { useHover } from '@mantine/hooks'

export const ServicesSection = () => {
    const [selected, setSelected] = useState(0)
    const [height, setHeight] = useState(0.25)
    const { hovered, ref } = useHover()

    const { reset, stop, start, isRunning } = useInterval({
        fn: () => {
            setSelected((prev) => (prev + 1) % SERVICES.length)
            setHeight(0.25)
        },
    })

    const {
        isRunning: heightIsRunning,
        start: heightStart,
        stop: heightStop,
    } = useInterval({
        fn: () => {
            setHeight((prev) => (prev + (1.45 / MILLISECONDS) * 100) % 100)
        },
        delay: 100,
    })

    useEffect(() => {
        if (hovered && isRunning) {
            stop()
        }
        if (!hovered && !isRunning) {
            start()
        }

        if (hovered && heightIsRunning) {
            heightStop()
        }

        if (!hovered && !heightIsRunning) {
            heightStart()
            setHeight(0.25)
        }
    }, [
        heightIsRunning,
        heightStart,
        heightStop,
        hovered,
        isRunning,
        start,
        stop,
    ])

    return (
        <section className='mx-auto max-w-[99.5rem] pb-20'>
            <div className='flex justify-center'>
                <Header text1='Our' text2='Services' className='pb-8' />
            </div>
            <div className='flex flex-col-reverse items-center justify-center gap-10 pt-10 text-center lg:flex-row lg:gap-20 xl:gap-52'>
                <div ref={ref} className='flex flex-col overflow-hidden'>
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'flex animate-fade-in flex-col items-center gap-8 max-sm:px-5 lg:h-[35rem]',
                                idx !== selected && 'hidden',
                            )}
                        >
                            <h4 className='font-slab text-xl font-bold text-white sm:text-[2rem] xl:text-[2.5rem]'>
                                {service.title}
                            </h4>
                            <Image
                                src={service.img}
                                alt={service.title}
                                className='pointer-events-none'
                            />
                            <p className='max-w-lg text-balance text-gray-100 max-sm:text-sm'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='relative z-40 flex flex-col'>
                    {SERVICES.map((service, idx) => (
                        <div
                            key={service.title}
                            className={cn(
                                'flex min-w-56 rounded-md px-4 text-base font-bold text-White outline-none ring-blue ring-offset-green-300 duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 sm:min-w-80 sm:text-2xl lg:min-w-96 xl:text-[2rem]',
                                idx === selected && 'text-green-300',
                            )}
                            role='button'
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setSelected(idx)
                                    setHeight(0.25)
                                    reset()
                                }
                            }}
                            onClick={() => {
                                setSelected(idx)
                                setHeight(0.25)
                                reset()
                            }}
                        >
                            <div className='flex w-full justify-between gap-4 py-2'>
                                <span className='py-2 font-inter leading-none'>
                                    {service.title}
                                </span>
                                {idx === selected && (
                                    <div
                                        className='size-1 max-h-6 rounded-2xl bg-green-300 duration-200 xl:max-h-8'
                                        style={{ height: `${height}rem` }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
