import React, { useState } from 'react'
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

  export default function App3() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Siguenos en redes sociales</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
           
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='whatsapp' />
            </a>
            
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  Wings Rocket
                </h6>
                <p>
                Es un Restaurant-Bar que se distingue por su ambiente y el extraordinario sabor, desde el 2015.
                </p>
              </MDBCol>
  
              <MDBCol md='4' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Nuestros Horarios:</h6>
                <p>
                  <a href='#!' className='text-reset'>
                  Martes: 19:00 - 23:00
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Miércoles: 19:00 - 23:00
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Jueves: 19:00 - 23:00
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                  Viernes y Sábado: 19:00 - 24:00
                  </a>
                </p>
              </MDBCol>
  
            
  
              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  Habit. Los Reyes Ixtacala 2A. Seccion, Av. de los Ejidos #214, 
                  Los Reyes Ixtacala, 54090 Ciudad de México, Méx.                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' /> 55 8762 1671
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright <a className='text-reset fw-bold' href=''>  Wings Rocket</a>
        </div>
      </MDBFooter>
    );
  }