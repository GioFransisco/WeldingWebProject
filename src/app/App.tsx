// import { useState } from 'react';
// import { Hero, About, Services, Projects, WhyChooseUs } from './components/MainSections';
// import { Contact } from './components/Contact';
// import { ProjectsPage } from './components/ProjectsPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  // const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  // if (currentPage === 'projects') {
  //   return (
  //     <div className="min-h-screen">
  //       <Header />
  //       <ProjectsPage onBack={() => setCurrentPage('home')} />
  //       <Footer />
  //     </div>
  //   );
  // }

  // return (
  //   <div className="min-h-screen">
  //     <Header />
  //     <main>
  //       <Hero />
  //       <About />
  //       <Services />
  //       <Projects onViewAll={() => setCurrentPage('projects')} />
  //       <WhyChooseUs />
  //       <Contact />
  //     </main>
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}