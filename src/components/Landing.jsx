import 'animate.css';
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import About from './About'
import Skillls from './Skillls'
import '../App.css'



function Landing() {
  return (
    <>
      <div className='r1' style={{ overflowX: "hidden", backgroundColor: "#FAFDFF" }}>
        <Row style={{ minHeight: "75vh", marginBottom: "80px", marginTop: "30px" }}>
          <Col id='col1' className='' md={5} sm={12} style={{ display: "flex", alignItems: "center" }}>
            <div >
              <h1 className=' animate__animated animate__bounce'>Hii , I'm <b >Ajay</b> </h1>
              <h3 className=''>Web Developer</h3>
              <a href='#abt'>
                <button className='btn ' id='bt-main'>
                  <i className="fa-regular fa-user me-2" />
                  About Me
                </button>
              </a>

            </div>

          </Col>

          <Col className='' md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"30px" }}>
            <img src="https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-hes-smiling_1221953-49271.jpg" width={"75%"} alt="" className='img1 animate__animated animate__slideInRight' />
          </Col>
        </Row>
      </div>

      <About/>
      <Skillls/>
    </>
  )
}

export default Landing