import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Services />
      <AboutSection />
      <Stats />
      <Process />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <FAQ />
    </>
  );
}
