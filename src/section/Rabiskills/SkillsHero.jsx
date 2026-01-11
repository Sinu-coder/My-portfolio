import React from 'react'
import "../../assets/css/SkillsHero.css"
import { Container,Row,Col } from 'react-bootstrap'
import Html from "../../assets/img/Html.png"
import js from "../../assets/img/js.png"
import css from "../../assets/img/css.png"
import react from "../../assets/img/react.png"
import boot from "../../assets/img/bootstrap.png"
import figma from '../../assets/img/figma.png'
import canva from "../../assets/img/canva.png"
import nextjs from "../../assets/img/next-js.png"
import tailwind from "../../assets/img/taiwind.png"
import git from "../../assets/img/git.png"
import vercel from "../../assets/img/vercel.png"
export default function SkillsHero() {
  return (
    <section className='skills-section'>
      <h1 className='skill-h1'>Skills</h1>
      <Container>
      <p className='skill-p'>I love to learn new things and experiment with new technologies.
                            These are some of the major languages, technologies, tools and platforms I have worked with:
                            </p>
   <div className='skill-container'>                         
    <div className='skill-flex'>
            <div>
            <div className='skill-img'>
                <img src={Html} alt='' className='img-fluid'/>
                </div>
            </div>
            
        <div>
            
            <div className='skill-img'>
                <img src={css} alt='' className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='skill-img'>
                <img src={js} alt='' className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='skill-img'>
                <img src={react} alt='' className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='skill-img'>
                <img src={nextjs} alt='' className='img-fluid'/>
            </div>
        </div>
    </div>




     <div className='skill-flex'>
            <div>
            <div className='skill-img'>
                <img src={figma} alt='' className='img-fluid'/>
                </div>
            </div>
            
        <div>
            
            <div className='skill-img'>
                <img src={canva} alt='' className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='skill-img'>
                <img src={boot} alt='' className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='skill-img'>
                <img src={tailwind} alt='' className='img-fluid'/>
            </div>
        </div>
        
    </div>

     <div className='skill-flex'>
            <div>
            <div className='skill-img'>
                <img src={git} alt='' className='img-fluid'/>
                </div>
            </div>
            
        <div>
            
            <div className='skill-img'>
                <img src={vercel} alt='' className='img-fluid'/>
            </div>
        </div>
    </div> 
  </div>
</Container>
    </section>
  )
}
