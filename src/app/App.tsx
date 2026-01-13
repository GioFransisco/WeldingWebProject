import { useState } from 'react';
import { Header } from './components/Header';
import { Hero, About, Services, Projects, WhyChooseUs } from './components/MainSections';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectsPage } from './components/ProjectsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen">
        <Header />
        <ProjectsPage onBack={() => setCurrentPage('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects onViewAll={() => setCurrentPage('projects')} />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}