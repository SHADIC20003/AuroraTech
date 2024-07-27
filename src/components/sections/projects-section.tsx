import React from 'react'
import { Header } from '../ui/header'
import { ProjectCard } from '../ui/project-card'
import { PROJECTS } from '@/lib/constants'

export const ProjectsSection = () => {
    return (
        <section className='relative z-40 mx-auto max-w-[99.5rem] px-5 py-14'>
            <div className='flex justify-center'>
                <Header text1='Selected' text2='Projects' className='pb-16' />
            </div>

            <div className='mx-auto grid max-w-[86.75rem] gap-16 md:grid-cols-2'>
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}
