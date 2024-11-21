import React from 'react'
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import About from '@/components/about'
import Project from '@/components/project'
import Contact from '@/components/contact'
const index = () => {
  return (
    <>
    <div className='space-y-32'>
    <header>
      <Navbar/>
      </header>
      <section id='home'>
      <Home/>
      </section>
      <section id='about'>
      <About/>
      </section>
      <section id='project'>
        <Project/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      </div>
    </>
  )
}

export default index
