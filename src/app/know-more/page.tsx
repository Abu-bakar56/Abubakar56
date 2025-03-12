import KnowMorePage from "@/sections/knownmore";
import { AboutSection }  from "@/sections/new_ab";
import {CertificatesSection } from "@/sections/certificate";
import { TapeSection } from "@/sections/tape1";

import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
export default function KnowMore() {
  return (
    <div>
      
      <Header/>
      <KnowMorePage/>
      <TapeSection/>

      <AboutSection/>
     
      <CertificatesSection/>
      <ContactSection />
      <Footer/>
      
    </div>
  );
}



