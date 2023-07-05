import React from 'react';
import '../css/Home.css';
import wavedownImage from '../images/wave2.png';
import waveImage from '../images/wave1.png';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import { colors } from '@mui/material';

function Home() {
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <p className="ns">NSS VOLUNTEER</p>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="nav-link" onClick={() => console.log('HOME clicked')}>
                  <Link to="/">HOME</Link><br />
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => console.log('SERVICES clicked')}>
                    SERVICES
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => console.log('SUGGESTION clicked')}>
                    SUGGESTION
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => console.log('CONTACT US clicked')}>
                    CONTACT US
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">NATIONAL SERVICE SCHEME</p>
               <p>Sometimes the smallest step in the right direction ends up being the biggest step of your life.</p> 
            </div>
          </div>
        </div>
        <img src={waveImage} className="bottom-img" alt="wave" />
      </section>

      <section id="services">
  <div className="container text-center">
    <h1 className="title">WHAT WE DO?</h1>
    <div className="row text-center">
      <div className="col-md-4 services">
        <h4>Adoption of Villages</h4>
        <p>
          Adoption of a village and area is a very meaningful programme in NSS. It is far better to concentrate attention on one village and take up the task for development perspective than to fritter away energy in many locations.
        </p>
      </div>
      <div className="col-md-4 services">
        <h4>Services in Slums</h4>
        <p>
          The slum, tenements, Jhuggis, and Jhoupris can be adopted by the NSS units with the aim of slum improvement. Under this, activities like providing water, water logging, sanitation, electricity, drainage, health and welfare services, life and living conditions can be undertaken.
        </p>
      </div>
      <div className="col-md-4 services">
        <h4>Evaluation of Project</h4>
        <p>
          Every project should be evaluated after its completion by involving members of the community, government officials, and Panchayat officials.
        </p>
      </div>
    </div>
    <button type="button" className="btn btn-primary">ALL SERVICES</button>
  </div>
</section>
{/* 
<section id="suggestion">
  <div className="container">
    <h1 className="title text-center">SUGGESTION</h1>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 about-us">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Residential Address</label>
          <input type="address" className="form-control" id="exampleFormControlInput1" placeholder="Your address" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Query/comments</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary">SUBMIT</button>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
</section> */}

      <section id="footer">
        <img src={wavedownImage} className="footer-img" alt="wavedown" />
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
              <ul>
                {/* <h6>CONTACT US</h6>
                <p>KAVILA V 21ADR022</p>
                <p>+91 897342213</p>
                <p>aaa@gamil.com</p> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
