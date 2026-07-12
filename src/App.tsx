import { useEffect, useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { MobileHeader } from './components/layout/MobileHeader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Technologies } from './components/sections/Technologies';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep text-text-secondary font-sans selection:bg-accent-blue/30 selection:text-text-primary antialiased">
      {/* Navigation Headers */}
      <Sidebar activeSection={activeSection} />
      <MobileHeader activeSection={activeSection} />

      {/* Main scrolling content area */}
      <main className="lg:pl-64 min-h-screen flex flex-col justify-between">
        <div className="flex-1">
          <Hero />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <About />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Experience />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Education />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Technologies />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Projects />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Certifications />
          
          <div className="w-full max-w-5xl mx-auto px-6">
            <hr className="border-border-subtle/30" />
          </div>
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
