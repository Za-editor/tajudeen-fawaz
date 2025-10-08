import React from 'react'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import Resume from '../components/Resume'
import ContactMe from '../components/ContactMe'


const Homepage = () => {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Resume />
      <ContactMe />

    </>
  )
}

export default Homepage