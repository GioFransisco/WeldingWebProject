import { Hero, About, Services, Projects, WhyChooseUs } from '../components/MainSections'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
      <div className="min-h-screen">
        <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects onViewAll={() => navigate('/projects')} />
            <WhyChooseUs />
            <Contact />
          </main>
        <Footer />
      </div>
    )
}