import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import gsap from "gsap";
import{ScrollTrigger, SplitText} from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)


const  App =() =>{


  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-[#111]"></div>
    </main> 
    </>
  )
}

export default App
