'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import { useInterval } from '@/hooks/use-interval'
import { cn } from '@/lib/utils'
import { useHover } from '@mantine/hooks'

type ProjectCardProps = {
    project: (typeof PROJECTS)[number]
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [currentImage, setCurrentImage] = React.useState(0)
    const interval = useInterval({
        fn: () => setCurrentImage((prev) => (prev + 1) % project.images.length),
    })
    const { hovered, ref } = useHover()

    useEffect(() => {
        if (hovered && interval.isRunning) {
            interval.stop()
        }
        if (!hovered && !interval.isRunning) {
            interval.start()
        }
    }, [hovered, interval])

    return (
        <div className='flex flex-col rounded-3xl bg-border-gradient p-[0.125rem] shadow-card'>
            <div className='flex grow flex-col rounded-3xl bg-blue'>
                <div
                    ref={ref}
                    className='relative flex overflow-hidden rounded-t-3xl'
                >
                    {project.images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={project.title + ' Image' + idx}
                            className='w-full shrink-0 grow rounded-t-3xl object-cover duration-500'
                            style={{
                                transform: `translateX(-${currentImage * 100}%)`,
                            }}
                        />
                    ))}

                    <div className='absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1'>
                        {new Array(project.images.length)
                            .fill(0)
                            .map((_, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        'size-2.5 rounded-full bg-gray-100 outline-none ring-blue ring-offset-green-300 duration-300 focus-visible:ring-2 focus-visible:ring-offset-2',
                                        idx === currentImage && 'w-6',
                                    )}
                                    role='button'
                                    aria-label={`Image Selector ${idx + 1}`}
                                    tabIndex={0}
                                    onClick={() => {
                                        setCurrentImage(idx)
                                        interval.reset()
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setCurrentImage(idx)
                                            interval.reset()
                                        }

                                        if (e.key === 'ArrowLeft') {
                                            setCurrentImage((prev) => {
                                                if (prev - 1 < 0) {
                                                    return (
                                                        project.images.length -
                                                        1
                                                    )
                                                }

                                                return prev - 1
                                            })
                                            interval.reset()
                                        }

                                        if (e.key === 'ArrowRight') {
                                            setCurrentImage(
                                                (prev) =>
                                                    (prev + 1) %
                                                    project.images.length,
                                            )
                                            interval.reset()
                                        }
                                    }}
                                />
                            ))}
                    </div>
                </div>
                <div className='flex grow flex-col gap-y-2 px-5 pb-5 pt-2'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-slab text-2xl font-medium text-White'>
                            {project.title}
                        </h3>
                        <Link
                            href={project.websiteUrl}
                            className='rounded-md font-inter text-sm font-bold text-green-300 outline-none ring-green-300 ring-offset-blue duration-300 hover:text-green-500 focus-visible:ring-2 focus-visible:ring-offset-2 active:text-[#152F26]'
                            target='_blank'
                        >
                            Visit Website
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-x-4 gap-y-2'>
                        {project.tags.map((tag, index) => (
                            <div
                                key={index}
                                className='flex items-center justify-center gap-2 rounded-3xl border border-gray-300 px-3 py-1 font-slab text-xs leading-none text-gray-300 sm:text-sm'
                            >
                                <Image src={tag.icon} alt={tag.name} />
                                {tag.name}
                            </div>
                        ))}
                    </div>
                    <div className='font-inter'>
                        <h4 className='text-xl font-medium text-White'>
                            Project Description
                        </h4>
                        <p className='text-sm text-gray-100'>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
