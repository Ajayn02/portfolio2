import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <>
      <div className='container' style={{ minHeight: "80vh", marginTop: "50px", overflowX: 'hidden' }}>
        <Row style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
          <h1 className='text-center mb-5 p1' >Projects</h1>


          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img className='' style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/gradient-multigenerational-home-illustration_52683-134517.jpg?t=st=1733717495~exp=1733721095~hmac=242f169f6eca5a5155f54d1e42b0beb6c0f2cd82782c0a70f04818e1a4365093&w=826" />
              <Card.Body>
                <Card.Title className='text-center my-3'>RealSpace</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                RealSpace is online platform that connects buyers and sellers of real estate properties.It provides a seamless and user-friendly experience, allowing users to buy, sell properties with ease.

                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/Real_space' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://realspace-frontend.vercel.app' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/customers-with-phones-shopping-online_74855-4781.jpg?t=st=1734414165~exp=1734417765~hmac=552e89203b87126cc2706357601f9cdf988713658f056d3732dc9b1afe6d7275&w=1060" />
              <Card.Body>
                <Card.Title className='text-center my-3'>E-Kart</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                eKart is an e-commerce website that allows users to browse and purchase various products online. The platform provides a seamless shopping experience with secure payments.                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/e-kart_angular' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://e-kart-2.vercel.app' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }} >
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/schoolboy-standing-books-raising-hand-speaking-pupil-reading-home-task-report-flat-vector-illustration-school-education-knowledge_74855-8576.jpg?t=st=1728199925~exp=1728203525~hmac=42a3f13837531e518f3c20a3fb8b189f0c0298a409060062324f2522a66423d3&w=740" />
              <Card.Body>
                <Card.Title className='text-center'>Edu Connect</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Edu Connect is a web-based application built with HTML, CSS, and React, designed to simplify student data management. Easily can manage and categorize student information, enhancing organization and productivity.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <a href='https://github.com/Ajayn02/Edu-connect' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                    <a href='https://edu-connect-navy.vercel.app/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7856.jpg?t=st=1728200570~exp=1728204170~hmac=62f3b5b853f28fd0137b502a869d96e57a70c99587d68ae6da6322be763bf40a&w=740" />
              <Card.Body>
                <Card.Title className='text-center my-3'>Recipe Finder</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Recipe Finder is a user-friendly recipe finder website built with HTML, CSS, and JavaScript. Quickly search and discover delicious recipes, save favorites, and cook with ease.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/Recipe-App' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://ajayn02.github.io/Recipe-App/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/happy-female-farmer-working-farm-feed-population-flat-vector-illustration-cartoon-farm-with-automation-technology_74855-8400.jpg?t=st=1728209215~exp=1728212815~hmac=3603fa1f9870024296da185161130b38b27def2b487ca59df3b3f04a1ac8df96&w=900" />
              <Card.Body>
                <Card.Title className='text-center'>Fresh Organic</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                Fresh Organic is an online organic market built with HTML, CSS, and Bootstrap. Explore our vibrant marketplace featuring fresh, seasonal veggies and fruits, carefully curated for healthy living.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/Fresh-Organic-Ecommercesite' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://ajayn02.github.io/Fresh-Organic-Ecommercesite/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img className='mb-5' style={{height:"150px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RACuKQ8sJxNXI17b6tLyd4vmhraPT5OYmw&s" />
              <Card.Body>
                <Card.Title className='text-center'>Air-Pods Clone</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                A responsive and visually stunning clone of the Apple AirPods website, built using HTML, CSS, and Bootstrap. This project replicates the original website's design, layout, and functionality
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/Airpods-clone' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://ajayn02.github.io/Airpods-clone/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Projects