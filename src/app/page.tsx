import Home from '@/components/Home'
import Contact from '@/components/contact/Contact'
import Navbar from '@/components/nav/Navbar'
import Services from '@/components/services/Services'
import Sidebar from '@/components/sidebar/Sidebar'
import Work from '@/components/work/Work'
import { Analytics } from '@vercel/analytics/react'

export default function page() {
    return (
        <main className='overflow-x-hidden font-merriWeather'>
            <Navbar />
            <Sidebar />
            <Home />
            <Services />
            <Work />
            <Contact />
            <Analytics />
        </main>
    )
}
