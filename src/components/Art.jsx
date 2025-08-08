import React from 'react'
import { featureLists, goodLists } from '../../constants'
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'

const Art = () => {
  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(()=>{
    const start = isMobile ? "top 5%" : "top 1%"
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom bottom",
        scrub: 1.5,
        pin: true,
      }
    })
    maskTimeline.to(".will-fade" ,{
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
    })
    .to(".masked-img" ,{
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration: 1,
      ease: "power1.inOut"
    })
    .to("#masked-content" , {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    })
  })


  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="./images/check.png" alt="check " />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          </div>
          <div>
                    <img src='./images/drink1.png' alt='left-leaf' 
        className='absolute top-30 left-4 w-40 rotate-12'/>
        <img src='./images/drink4.png' alt='right-leaf' 
        className='absolute bottom-30 right-4 w-40 rotate-6'/>

          </div>
          <div className="cocktail-img">
            <img src="./images/under-img.jpg" alt="cocktail" className="abs-center masked-img 
            object-contain size-full" />
          </div>
          <div className="content">
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature,index)=>(
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="./images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container ">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Art