import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white marquee-wrapper">
        <div className="container mx-auto px-4 py-2 marquee-content">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@elitewelding.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@elitewelding.com</span>
              </a>
            </div>
            {/* <div className="hidden md:block">
              <span>Monday - Friday: 7:00 AM - 6:00 PM</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-2 rounded">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L8 10V22L16 28L24 22V10L16 4Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 14L16 12L20 14V20L16 22L12 20V14Z" fill="currentColor" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Beast Welding</h1>
              <p className="text-xs text-slate-600">Professional Welding Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-orange-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-orange-500 transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-orange-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-500 transition-colors">Contact</button>
            {/* <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 text-white">
              Get a Quote
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-500 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-orange-500 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-orange-500 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-orange-500 transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-500 transition-colors text-left">Contact</button>
              {/* <Button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Get a Quote
              </Button> */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
