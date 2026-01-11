import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import about from "../../assets/img/Rabi.png"
import "../../assets/css/about.css"
function AboutHero() {
  return (
    <section className='about-section'>
      <Container>
        <h1 className=' about-h1 text-center'>About </h1>
        <Row className='g-4 align-items-center justify-content-between flx-colm'>
            <Col xs={12} md={12} lg={6} >
              <div className='about-content'>
                Entry‑level Frontend Developer focused on building fast, responsive, and accessible UIs with HTML, CSS,
                Bootstrap, and React. Comfortable with component‑based design, hooks, state management, and REST API
                integration. Strong fundamentals in layout (Flexbox/Grid), forms, and cross‑browser compatibility. Eager to
                contribute to a product team, learn from code reviews, and ship polished user experiences.

              </div>
            </Col>
             <Col xs={12} md={12} lg={6} className='d-flx'>
             <div className='about-img'>
                <img src={about} alt='' className='img-fluid'/>
             </div>
             </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutHero
