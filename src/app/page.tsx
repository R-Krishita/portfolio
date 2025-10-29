import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Leadership from '@/components/sections/Leadership';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Certificates />
      <Contact />
    </main>
  );
}
