import { AboutSection } from '@/components/sections/about-section'
import { IntroSection } from '@/components/sections/intro-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ServicesSection } from '@/components/sections/services-section'
import { Others, Technologies } from '@/components/svgs'
import { InfiniteMovingTechnologies } from '@/components/ui/infinite-moving-technologies'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='relative overflow-x-hidden'>
            <Image
                src={Others.Lines}
                alt='Lines'
                className='pointer-events-none absolute right-20 top-24 hidden lg:block'
            />

            <div className='absolute -top-[500px] left-0 right-0 z-50 h-[1500px] w-[28rem] rotate-[-62.598deg] rounded-full bg-background-gradient blur-[100px]' />
            <IntroSection />

            <div className='relative bg-blue-secondary'>
                <div className='absolute -top-[200px] left-[850px] right-0 z-30 h-[1950px] w-[28rem] rotate-[54.798deg] rounded-full bg-background-gradient blur-[100px]' />

                <div className='relative -top-7 pl-6 sm:pl-12'>
                    <Image
                        src={Others.DotsLeft}
                        alt='Dots Left'
                        className='pointer-events-none'
                    />
                </div>
                <ServicesSection />
                <section className='relative z-40 bg-blue py-4'>
                    <h3 className='pb-6 text-center font-inter text-2xl font-semibold text-White'>
                        Technologies We Use
                    </h3>
                    <InfiniteMovingTechnologies
                        items={Technologies}
                        speed='normal'
                        pauseOnHover={false}
                    />
                    <InfiniteMovingTechnologies
                        items={Technologies}
                        direction='right'
                        speed='normal'
                        pauseOnHover={false}
                    />
                </section>
                <ProjectsSection />
            </div>
            <AboutSection />
        </main>
    )
}
