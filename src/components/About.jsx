import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='container-fluid div2'style={{overflowX:"hidden",minHeight:"100vh"}} id='abt'>
        <Row style={{minHeight:"vh"}} className=' r2'>
          <h1 className='text-center mt-5 mb-5' >About Me</h1>
          
          <Col style={{textAlign:"justify"}} lg={8} md={9} sm={12} className=''>
              <p id='con1'>Hi! I’m <b>Ajay</b>, a passionate <b>web developer</b> with a knack for creating dynamic, user-friendly websites. With expertise in HTML, CSS, JavaScript, and various frameworks, I transform ideas into responsive, visually appealing designs. I thrive on solving complex problems and continuously learning the latest technologies to deliver exceptional results. My goal is to build web experiences that not only meet client needs but also engage and delight users. Let’s connect and bring your vision to life!</p>
              <div className='d-flex justify-content-center'>
                  <button className='btn btn-outline-none me-3 bt1' style={{backgroundColor:"transparent"}}>
                   <a href='https://www.linkedin.com/in/ajay-n02/' target='blank'> <i className="fa-brands fa-linkedin fa-2x" style={{color: "#00040a",}} /></a>
                  </button>
                  <button className='btn btn-outline-none bt1'style={{backgroundColor:"transparent"}}>
                    <a href='https://github.com/Ajayn02' target='blank'><i className="fa-brands fa-square-github fa-2x" style={{color: "#00040a",}} /></a>
                  </button>
              </div>
          </Col>
          
        </Row>
      </div>
    </>
  )
}

export default About