import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { AboutMePage } from "@/sections/aboutpage";

export default function Home() {
  return (
    <div>
      <Header/>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMePage />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="tape">
        <TapeSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="aboutsection">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer/>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <ProjectsSection />
//       <TapeSection />
//       <TestimonialsSection />
//       <AboutSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }
