import Link from "next/link"
import Intro from "./components/home/Intro"
import AboutMeSection from "./components/home/Aboutme";
import ExperienceSection from "./components/home/Experience";
import ProjectsSection from "./components/home/Projects";
import ContactSection from "./components/home/Contact";

export default function Home() {
  return (
    <>
    <Intro/>
    <AboutMeSection/>
    <ExperienceSection/>
    <ProjectsSection/>
    <ContactSection/>
    </>
  )
}
