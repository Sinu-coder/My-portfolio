

import React from "react";
import "../assets/css/Hero.css";
import { FaGithub,FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Profile from   "../assets/img/Bau-img.png"
import { Container } from "react-bootstrap";
export default function Hero() {
  return (
    <Container>
      <div className="card card-border ">
        <div className="slide slide1">
          <div className="icon">
             <img src={Profile} alt="profile"  className="img-fluid" />
          </div>
        </div>

        <div className="slide slide2">
          <div className="content">
            <h3>Rabi Narayan Panda</h3>
            <p>Passionate Frontend Developer Crafting Clean, Scalable & Engaging User Interfaces.</p>
          </div>
        </div>
      </div>
    <h1 className="home-h1">
  Hi! I'm a&nbsp;<span className="typewriter">Frontend Developer</span>
</h1>
 <div className="social-icon">
  <ul className="skew-social">
      <li>
        <a href="https://github.com/Sinu-coder">
          <FaGithub className="fa" />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://vercel.com/rabi-narayan-pandas-projects">
          < SiVercel className="fa" />
          <span>Vercel</span>
        </a>
      </li>
      <li>
        <a href="mailto:pandarabinarayana721@gmail.com?subject=Portfolio%20Contact&body=Hello%20Rabi,%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
    target="_blank"
    rel="noreferrer">
          <FaEnvelope className="fa" />
          <span>E-mail</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chocolate_boy_rabinarayanpanda?igsh=ZWEzMnRmazZhd3g0">
          <FaInstagram className="fa" />
          <span>Instagram</span>
        </a>
      </li>
    </ul>
 </div>

    </Container>
  );
};