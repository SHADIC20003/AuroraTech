import WorkDescription from './WorkDescription'

export default function Work() {
    return (
        <section
            id='our-work'
            className='flex lg:flex-row flex-col-reverse lg:gap-20 bg-dark-green'
        >
            <div className='flex flex-col gap-20 lg:px-7 lg:py-20'>
                <div className='xl:translate-x-40 lg:translate-x-24  lg:block hidden'>
                    <h1 className='text-primary xl:text-7xl lg:text-5xl text-[28px] font-bold'>
                        Our Work:
                    </h1>
                </div>
                <div className='flex flex-col lg:gap-10 gap-5 p-5 lg:p-0'>
                    <WorkDescription
                        title='Software solutions'
                        description='We create software solutions using the latest tools and technologies. We have a skilled team of software developers who ensure user-friendly, secure, and high-performing apps.'
                    />

                    <WorkDescription
                        title='Digital automation Transformation'
                        description='We create digital automation solutions using the best frameworks and platforms. We have an experienced team of digital automation consultants who ensure efficient, effective, and scalable solutions.'
                    />
                </div>
            </div>
            <div>
                <img
                    src='/work-group-2.png'
                    alt='Group Work'
                    className='translate-x-3 '
                />
            </div>
            <div className='block lg:hidden'>
                <h1 className='text-primary text-[28px] font-bold p-5 pb-0'>
                    Our Work:
                </h1>
            </div>
        </section>
    )
}

// <img
//                 src='/1.png'
//                 alt=''
//                 className='-translate-y-[17.5rem] translate-x-20'
//             />
//             <div className='-translate-y-20'>
//                 <img
//                     src='/image1.png'
//                     alt=''
//                     className='translate-x-28 translate-y-40'
//                 />
//                 <img src='/image2.png' alt='' className='' />
//                 <img
//                     src='/image4.png'
//                     alt=''
//                     className='-translate-x-28 -translate-y-40'
//                 />
//             </div>
//             <img
//                 src='/2.png'
//                 alt=''
//                 className='translate-y-12 translate-x-7'
//             />
