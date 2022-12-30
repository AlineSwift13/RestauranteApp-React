
import React, { useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Reservation = () => {
    return (
      <section
        id="gtco-reservation"
        class="bg-fixed bg-white section-padding overlay"
        style={{
          backgroundImage:
            "url(" +
            "https://user-images.githubusercontent.com/111624621/209763691-890424ab-1643-4c09-b3ef-779093a69d50.jpg" +
            ")",
          backgroundPosition: "top-center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
      
        
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-content bg-white p-5 shadow">
                <div class="heading-section text-center">
                  <h2>¡Quiero Reservar!</h2>
                  <br /><br />
                </div>
                <form method="post" name="contact-us" action="">
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <div
                        class="input-group date"
                        id="datetimepicker4"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          class="form-control datetimepicker-input"
                          data-target="#datetimepicker4"
                          placeholder="Fecha y Hora"
                        />
                        <div
                          class="input-group-append"
                          data-target="#datetimepicker4"
                          data-toggle="datetimepicker"
                        >
                          <div class="input-group-text">
                          <MDBIcon fas icon="business-time" />
                          </div>
                        </div>
                      </div>
                    </div>
  
  
                    <div class="col-md-12 form-group">
                      <select class="form-control" id="selectPerson">
                        <option> Seleccciona No. de Personas</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>+10</option>
                      </select>
                    </div>
  
                    <div class="col-md-12 form-group">
                      <textarea
                        class="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Comentarios adicionales"
                      ></textarea>
                    </div>
                    <br /><br />
                    <div class="col-md-12 text-center">
                    <br />
                      <button
                        class="btn btn-primary btn-shadow btn-lg"
                        type="submit"
                        name="submit"
                      >
                       Confirmar mi Reservación
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Reservation;