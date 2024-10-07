import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <>
      <div className='container' style={{ minHeight: "80vh", marginTop: "50px", overflowX: 'hidden' }}>
        <Row style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
          <h1 className='text-center mb-5 p1' >Projects</h1>

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
              <Card.Img className='' style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?t=st=1728200283~exp=1728203883~hmac=cbaaefd0fe0e4446dc2b900faf8cf02bcbeea466a76077ff8ac9831cf7b3e954&w=826" />
              <Card.Body>
                <Card.Title className='text-center my-3'>E-Kart</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                E-Kart is a cutting-edge e-commerce platform built with HTML, CSS, React, and Redux. Enjoy seamless online shopping with features like Add to Cart, Wishlist, and secure checkout.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/EKart' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://e-kart-iota-olive.vercel.app/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px" }}>
            <Card className='shadow pro' style={{ width: '18rem',padding:"0px" }}>
              <Card.Img style={{height:"200px"}} variant="top" src="https://img.freepik.com/free-vector/media-player-concept-illustration_114360-3362.jpg?t=st=1728200393~exp=1728203993~hmac=443a705cf60c2253689223ef60b3dbfee1ef79ed2eaeb8af169eba1976e9b542&w=740" />
              <Card.Body>
                <Card.Title className='text-center my-3'>Media player</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                MediaPlay is a user-friendly media player website built with HTML, CSS, and React. Easily add videos, categorize favorites, and create personalized playlists for an enhanced viewing experience.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <a href='https://github.com/Ajayn02/MeadiaPlayer' target='blank'><button id='bt-main' className='btn btn-success'>Source</button></a>
                <a href='https://meadia-player01.vercel.app/' target='blank'><button id='bt-main' className='btn btn-success'>Live Demo</button></a>
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