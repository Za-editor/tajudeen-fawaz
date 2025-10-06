import React from 'react'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import Resume from '../components/Resume'

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Resume />
    </>
  )
}

export default Homepage