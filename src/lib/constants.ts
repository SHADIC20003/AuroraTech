import { Others, Services, Work } from '@/components/svgs'

export const MILLISECONDS = 6000

// Translation keys for process steps — text lives in messages/{locale}.json
export const PROCESS_STEPS = [
    { step: 1, key: 'strategy' },
    { step: 2, key: 'design' },
    { step: 3, key: 'development' },
    { step: 4, key: 'launch' },
]

// Translation keys added — `key` maps to messages/{locale}.json nav.*
export const NAV_ITEMS = [
    { href: '/', key: 'home' },
    { href: '/services', key: 'services' },
    { href: '/our-work', key: 'ourWork' },
    { href: '/about-us', key: 'aboutUs' },
    { href: '/blogs', key: 'blogs' },
] as const

export const FOOTER_LINKS = [
    { href: '/', key: 'home' },
    { href: '/services', key: 'services' },
    { href: '/our-work', key: 'ourWork' },
    { href: '/about-us', key: 'aboutUs' },
    { href: '/contact', key: 'contact' },
    { href: '/blogs', key: 'blogs' },
    { href: 'https://forms.gle/auo2Fq7QRErQFGbt9', key: 'applyForWork', externalText: 'Apply for Work', isExternal: true },
    { href: '/others/Aurora-Tech-Portfolio.pdf', key: 'ourPortfolio', externalText: 'Our Portfolio', isDownload: true },
]

export const FOOTER_CONTACT = [
    { icon: Others.Phone, text: '+201033573845', href: 'tel:+201033573845' },
    { icon: Others.Phone, text: '+201069965752', href: 'tel:+201069965752' },
    { icon: Others.Email, text: 'info@auroratech.me', href: 'mailto:info@auroratech.me' },
    { icon: Others.Facebook, text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61551227603812' },
    { icon: Others.LinkedIn, text: 'Linkedin', href: 'https://www.linkedin.com/company/aurora-software-tech/' },
    { icon: Others.Instagram, text: 'Instagram', href: 'https://www.instagram.com/auroratech.me/' },
]

// Translation keys for services — title/description live in messages/{locale}.json
export const SERVICES = [
    { key: 'webDev', img: Services.WebDev },
    { key: 'mobDev', img: Services.MobDev },
    { key: 'uiUx', img: Services.UI_UX },
    { key: 'maintenance', img: Services.Maintenance },
] as const

export const PROJECTS = [
    {
        title: 'Quellor',
        slug: 'quellor',
        client: 'Quellor Inc.',
        description:
            'A modern blogging-based social media platform designed to empower creators. Quellor encourages users to share their thoughts, stories, and news in a longform format, providing an alternative to the dominance of short-form content.',
        images: [Work.Quellor.Home, Work.Quellor.Login, Work.Quellor.Search, Work.Quellor.Blog],
        tags: [{ name: 'Web Design & Development', icon: Others.WebDevTag }],
        websiteUrl: 'https://quellor.net',
        role: 'Full Stack Development, UI/UX Design',
        timeline: '3 Months',
        challenge:
            'Short-form content platforms dominate the social media landscape, leaving creators who prefer longform storytelling without a dedicated, high-quality home. Existing alternatives were either too complex or lacked the community-building features needed to grow an audience.',
        solution:
            'We built Quellor from the ground up as a blogging-first social platform — combining a rich markdown editor, follower feeds, and discoverability tools into a clean, fast interface. A custom recommendation engine surfaces relevant stories to readers, while the creator dashboard gives authors real-time analytics.',
        results:
            'Achieved 3,000+ registered creators within the first month post-launch. Average session duration is 7 minutes — more than 3× the industry average for content platforms. SEO-optimised article pages rank on the first page of Google for niche topics within weeks of publishing.',
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AWS S3'],
    },
    {
        title: 'Uplo',
        slug: 'uplo',
        client: 'Uplo Store',
        description:
            'A minimalist e-commerce platform built with aesthetics and functionality in mind. Designed for a brand that prioritizes clean, modern visuals, Uplo delivers a seamless shopping experience while making the brand itself the focal point.',
        images: [Work.Uplo.About, Work.Uplo.Cart, Work.Uplo.Info1, Work.Uplo.Item],
        tags: [
            { name: 'Web Design & Development', icon: Others.WebDevTag },
            { name: 'E-Commerce', icon: Others.Store },
        ],
        websiteUrl: 'https://uplo-store.com',
        role: 'Frontend Development, Headless CMS',
        timeline: '2 Months',
        challenge:
            'The client wanted an e-commerce storefront that made the brand the hero — not the product listing UI. Most off-the-shelf solutions produced cluttered interfaces that competed with the product photography and diluted the premium feel the brand demanded.',
        solution:
            'We designed and developed a bespoke minimalist storefront with full-bleed imagery, fluid animations, and a frictionless checkout flow. A headless architecture decouples the CMS from the frontend, enabling the team to update collections without developer involvement.',
        results:
            'Conversion rate increased by 38% compared to the legacy store. Cart abandonment dropped 22% thanks to the streamlined single-page checkout. Page load time under 1.2 s on mobile (Lighthouse score: 97).',
        techStack: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    },
    {
        title: 'Learnify.ai',
        slug: 'learnify-ai',
        client: 'Learnify Education',
        description:
            'A next-generation LMS designed for universities, enhanced with AI powered tools to assist both students and professors.',
        images: [Work.Learnify.Login, Work.Learnify.Chat, Work.Learnify.Dashboard, Work.Learnify.Tasks],
        tags: [{ name: 'Web Design & Development', icon: Others.WebDevTag }],
        websiteUrl: 'https://learnify-ai-one.vercel.app',
        role: 'Full Stack Development, AI Integration',
        timeline: '4 Months',
        challenge:
            'Universities rely on outdated LMS platforms that treat AI as an afterthought. Students lack instant, personalised support between lectures, and professors spend hours manually grading repetitive assignments instead of focusing on high-value teaching.',
        solution:
            "We engineered a next-generation LMS with an embedded AI assistant (GPT-4 powered) that answers student questions in real time, summarises lecture notes, and generates draft rubrics for professors. A live dashboard gives faculty a bird's-eye view of cohort progress and surfaces at-risk students automatically.",
        results:
            '87% of students rated the AI assistant "very helpful" in post-semester surveys. Time professors spent on routine grading fell by 40%. The platform handled 10,000 concurrent users during exam season with zero downtime.',
        techStack: ['Next.js', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker', 'Redis'],
    },
    {
        title: 'Latin',
        slug: 'latin',
        client: 'Latin Beauty',
        description:
            'Latin is a beauty and fashion brand specializing in lip gloss, and other makeup and beauty products to match their fantastic and stylish brand we decided to make this elegant website for them.',
        images: [Work.Latin.Home, Work.Latin.Checkout, Work.Latin.Login],
        tags: [
            { name: 'Web Design & Development', icon: Others.WebDevTag },
            { name: 'E-Commerce', icon: Others.Store },
        ],
        websiteUrl: 'https://latin-ten.vercel.app/',
        role: 'E-commerce Development, UI/UX Design',
        timeline: '6 Weeks',
        challenge:
            "Latin Beauty needed an e-commerce presence as elegant and bold as its product line. Generic Shopify themes failed to capture the brand's identity, and the client required a bespoke checkout experience that reduced the multi-step friction typical of beauty retail.",
        solution:
            "We crafted a fully custom Next.js storefront featuring rich editorial layouts, animated product reveals, and a one-click checkout powered by Stripe. The design system was built around the brand's signature warm palette, ensuring every page felt on-brand without sacrificing speed.",
        results:
            'Average order value increased by 27% following launch. The editorial homepage drove a 45% uplift in social media referral traffic. Mobile checkout completion rate reached 91%.',
        techStack: ['Next.js', 'Stripe', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Prisma'],
    },
    {
        title: 'DHEBH',
        slug: 'dhebh',
        client: 'DHEBH Hospital, Saudi Arabia',
        description:
            'DHEBH is website for a leading hospital in Saudi Arabia, for this we made a professional looking modern website that reflects the professionalism of the hospital itself.',
        images: [Work.Dhebh.Home, Work.Dhebh.Contact, Work.Dhebh.Hospital, Work.Dhebh.Reviews, Work.Dhebh.Mission],
        tags: [
            { name: 'Web Design & Development', icon: Others.WebDevTag },
            { name: 'Medical', icon: Others.Medical },
        ],
        websiteUrl: 'https://www.dhebh.vercel.app/',
        role: 'Full Stack Development, Accessibility',
        timeline: '3 Months',
        challenge:
            "As one of Saudi Arabia's leading hospitals, DHEBH needed a digital presence that conveyed clinical excellence and institutional trust while remaining accessible to patients across all demographics and devices — including elderly users with accessibility needs.",
        solution:
            'We delivered a WCAG AA-compliant website with bilingual (Arabic/English) support, a department-and-specialist directory, an online appointment request flow, and a news hub for health articles. The design language draws on clean whites and subtle gradients to project professionalism without being cold.',
        results:
            "Online appointment requests increased by 60% in the first quarter post-launch. Accessibility audit score: 98/100. The Arabic RTL layout received praise from the client's patient-experience team for its naturalness and readability.",
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
    },
]
