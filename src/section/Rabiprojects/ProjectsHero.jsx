import React from 'react'
import "../../assets/css/ProjectsHero.css"
import { Container,Row,Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import pr1 from "../../assets/img/eximus-project1.png"
import pr2 from "../../assets/img/pr2.png"
import pr3 from "../../assets/img/pr3.png"
import pr4 from "../../assets/img/jobyaary.png"
import pr5 from "../../assets/img/dashboard.png"
function ProjectsHero() {
  return (
    <section className='project-section'>
      <Container>
        <h1>Projects</h1>
        <Row className="g-4 pad-row " lg={3} md={2} sm={1} xs={1}  >
         <Col className='project-col'>
          <div className='project-div'>
            <div className="card-project" >
      <img
        src= {pr1}
        className="card-img-top"
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">EXIMINUS.NEXT BPM</h5>
        <p className="card-text text-left ">
          Modern Multi-Page Corporate Website Built with React, Dynamic Services, Blogs, 
          and Smooth Navigation
        </p>
      </div>

      <ul className="list-group list-group-flush text-left ">
        <li className="list-group-item">Scalable React App with Modular Architecture.</li>
        <li className="list-group-item">Production-Ready React App Using Context API.</li>
        <li className="list-group-item">Modern React Corporate Website with Dynamic Pages.</li>
      </ul>

      <div className="card-body">
        <NavLink to="https://github.com/Sinu-coder/E-commerce-website" className="btn-prj liquid">
          <span>GitHub</span>
        </NavLink>
        <NavLink to="https://react-eximinus-next.vercel.app/" className="btn-prj liquid">
         <span>Live Demo</span> 
        </NavLink>
      </div>
    </div>
            </div>           
         </Col>
         <Col className='project-col'>
          <div className='project-div'>
            <div className="card-project" >
      <img
        src= {pr2}
        className="card-img-top"
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">TRUST THE FOOD IN ONLINE </h5>
        <p className="card-text text-left ">
          Production-Ready React E-Commerce Application with Cart, Checkout, and Dynamic Product Pages.
        </p>
      </div>

      <ul className="list-group list-group-flush text-left ">
        <li className="list-group-item">High-Performance React Store with Fast Loading and Smooth Navigation.</li>
        <li className="list-group-item">Interactive React E-Commerce Platform with Engaging User Experience.</li>
        <li className="list-group-item">Visually-Rich Online Store Built with Modular React Components.</li>
      </ul>

      <div className="card-body">
        <NavLink to="https://github.com/Sinu-coder/Online-kart" className="btn-prj liquid">
          <span>GitHub</span> 
        </NavLink>
        <NavLink to="https://food-kart-vert.vercel.app/" className="btn-prj liquid">
         <span>Live Demo</span> 
        </NavLink>
      </div>
    </div>
            </div>           
         </Col>
         <Col className='project-col'>
          <div className='project-div'>
            <div className="card-project" >
      <img
        src= {pr3}
        className="card-img-top "
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">TRUSTED BY USERS </h5>
        <p className="card-text text-left ">
          React-Powered Online Store with Seamless Shopping Experience.
        </p>
      </div>

      <ul className="list-group list-group-flush text-left ">
        <li className="list-group-item">React-Powered Online Store with Seamless Shopping.</li>
        <li className="list-group-item">Interactive React Shop with Cart and Checkout.</li>
        <li className="list-group-item">Trendy Online Store Built with React, Showcasing Popular Products, Offers, and Customer Testimonials.</li>
      </ul>

      <div className="card-body">
        <NavLink to="https://github.com/Sinu-coder/Online-kart" className="btn-prj liquid">
         <span> GitHub</span>
        </NavLink>
        <NavLink to="https://online-cart-one.vercel.app/" className="btn-prj liquid">
        <span>Live Demo</span>  
        </NavLink>
      </div>
    </div>
            </div>           
         </Col>
        
         
        </Row>
        <Row className="g-4 pad-row  " lg={3} md={2} sm={1} xs={1}  >
         <Col className='project-col'>
          <div className='project-div'>
            <div className="card-project" >
      <img
        src= {pr4}
        className="card-img-top"
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">JOBYARRY</h5>
        <p className="card-text text-left ">
           Explore verified job opportunities,
    Stay updated with exams, 
    Grow your professional career
        </p>
      </div>

      <ul className="list-group list-group-flush text-left ">
        <li className="list-group-item">Trusted job listings across 
          <br/>
          industries.</li>
        <li className="list-group-item">Exam notifications and syllabus
          <br/>
           updates.</li>
        <li className="list-group-item">Career support for long-term
          <br/>
           growth</li>
      </ul>

      <div className="card-body">
        <NavLink to="https://github.com/Sinu-coder/Online-job" className="btn-prj liquid">
        <span>GitHub</span>  
        </NavLink>
        <NavLink to="https://jobyaari.vercel.app/" className="btn-prj liquid">
         <span>Live Demo</span> 
        </NavLink>
      </div>
    </div>
            </div>           
         </Col>
         <Col className='project-col'>
          <div className='project-div'>
            <div className="card-project" >
      <img
        src= {pr5}
        className="card-img-top"
        alt="Card"
      />

      <div className="card-body">
        <h5 className="card-title">Authentication Dashboard</h5>
        <p className="card-text text-left ">
          Login and register functionality, 
    Route protection with authentication, 
    Smooth user navigation experience
        </p>
      </div>

      <ul className="list-group list-group-flush text-left ">
        <li className="list-group-item">Email and password based secure login system</li>
        <li className="list-group-item">Local storage based user data handling system.</li>
        <li className="list-group-item">Logout functionality clears active user
          <br/>
           session</li>
      </ul>

      <div className="card-body">
        <NavLink to="https://github.com/Sinu-coder/Dashboard" className="btn-prj liquid">
        <span>GitHub</span>  
        </NavLink>
        <NavLink to="https://react-dashboard-three-self.vercel.app/" className="btn-prj liquid">
        <span>Live Demo</span>  
        </NavLink>
      </div>
    </div>
      </div>           
         </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProjectsHero
