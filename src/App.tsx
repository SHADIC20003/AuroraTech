import Home from './components/Home'
import Contact from './components/contact/Contact'
import Navbar from './components/nav/Navbar'
import Services from './components/services/Services'
import Sidebar from './components/sidebar/Sidebar'
import Work from './components/work/Work'

function App() {
    return (
        <main className='overflow-x-hidden font-merriWeather'>
            <Navbar />
            <Sidebar />
            <Home />
            <Services />
            <Work />
            <Contact />
        </main>
    )
}

export default App
