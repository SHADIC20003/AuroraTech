import { AboutSection } from '@/components/sections/about-section'
import { IntroSection } from '@/components/sections/intro-section'
import { MetricsSection } from '@/components/sections/metrics-section'
import { ProcessSection } from '@/components/sections/process-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ServicesSection } from '@/components/sections/services-section'
import { Others, Technologies } from '@/components/svgs'
import { InfiniteMovingTechnologies } from '@/components/ui/infinite-moving-technologies'
import { InlineCTA } from '@/components/ui/inline-cta'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function Home() {
    const t = await getTranslations('technologies')
    return (
        <main className='relative overflow-x-hidden'>
            <Image
                src={Others.Lines}
                alt='Lines'
                className='pointer-events-none absolute end-20 top-24 hidden lg:block'
            />

            <div className='absolute -top-[500px] start-0 end-0 z-50 h-[1500px] w-[28rem] rotate-[-62.598deg] rounded-full bg-background-gradient blur-[100px]' />
            <IntroSection />

            <div className='relative'>
                <div className='absolute -top-[200px] start-[850px] end-0 z-30 h-[1950px] w-[28rem] rotate-[54.798deg] rounded-full bg-background-gradient blur-[100px]' />

                <div className='relative -top-7 ps-6 sm:ps-12'>
                    <Image
                        src={Others.DotsLeft}
                        alt='Dots Left'
                        className='pointer-events-none'
                    />
                </div>
                <ServicesSection />
                <section className='relative z-40 py-20'>
                    <h3 className='pb-10 text-center font-inter text-2xl font-semibold text-slate-900 dark:text-white'>
                        {t('title')}
                    </h3>
                    <div className='flex flex-col gap-6'>
                        <InfiniteMovingTechnologies
                            items={Technologies}
                            speed='normal'
                            pauseOnHover
                        />
                        <InfiniteMovingTechnologies
                            items={Technologies}
                            direction='right'
                            speed='normal'
                            pauseOnHover
                        />
                    </div>
                </section>
                <ProcessSection />
                <InlineCTA />
                <ProjectsSection />
                <InlineCTA />
            </div>
            <MetricsSection />
            <AboutSection />
        </main>
    )
}
