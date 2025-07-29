import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home=()=>{
     return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle */}

        <ThemeToggle />
        {/*background effects */}
        <StarBackground />

        {/*Navbar */}
        <Navbar />
        {/*Main Content */}
        <main>
         <HomeSection />
         <AboutMe />
         <SkillsSection />
         <ProjectsSection />
         <ContactSection />
        
        </main>
        {/*Footer */}
        <Footer />
     </div>
};