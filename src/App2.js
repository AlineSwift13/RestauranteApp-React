import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Services1 from "./assets/Services1.png";
import Services2 from "./assets/Services2.png";
import Services3 from "./assets/Services3.png";


function App2() {
  return (
    <main>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="https://user-images.githubusercontent.com/111624621/209749808-be22a8e2-ef08-4402-a4f2-932190348ef8.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Lover Wings
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/111624621/209748371-590da5bc-f230-4773-aac5-652fb7a59014.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/111624621/209748816-0a8a4467-b38a-4e8e-ad7a-0fcd006310a1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/111624621/209749185-2035b50c-f0e6-4bdf-91b2-45617c98eb7f.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <section className="menu section">
        <div className="title">
          <h2>¿Quiénes Somos?</h2>
          <div className="underline"></div>
        </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>Alitas de mas de 18 salsas, Hamburguesas y las mejores micheladas.</p>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>Somos un Restaurant-Bar que se distingue por su ambiente y 
            el extraordinario sabor.</p>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>Ambiente familiar amenizado por banda reconocido en los Reyes Ixtacala.</p>
        </div>
      </div>
      </section>
    </main>
  )
}

export default App2
