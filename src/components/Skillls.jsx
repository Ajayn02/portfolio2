import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import css from '../icons/css.png'
import js from '../icons/js.png'
import bootstrap from '../icons/bootstrap.png'
import react from '../icons/react.png'
import angular from '../icons/angular.png'
import node from '../icons/node.png'
import express from '../icons/express.png'
import redux from '../icons/redux.png'
import git from '../icons/git.png'
import tailwind from '../icons/tailwind.png'


function Skillls() {
  return (
    <>
      <div className='container' style={{ minHeight: "100vh" }}>
        <div className='d-flex justify-content-center' style={{ marginTop: "50px" }}>
          <i className="fa-solid fa-desktop fa-2x me-2" style={{ color: "#00040a", }} />
          <h2 className='text-center ' >Skills & Abilities</h2>
        </div>
        <Row style={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", marginTop: "30px" }}>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              {/* HTML */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s" className=''style={{width:"45%",marginTop:"35px",marginBottom:"20px"}}/>
              <Card.Body>
                <Card.Title className='text-center'>HTML-5</Card.Title>
              </Card.Body>
            </Card>
          </Col>

           <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              {/* css */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Card.Img variant="top" src={css} className='' style={{width:"60%",marginTop:"20px"}}/>
              <Card.Body>
                <Card.Title className='text-center'>Css-3</Card.Title>
              </Card.Body>
            </Card>
           </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* bootstrap */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Card.Img variant="top" src={bootstrap} className='' style={{width:"50%",marginTop:"40px"}}/>
              <Card.Body>
                <Card.Title className='text-center'>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* tailwind */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Card.Img variant="top" src={tailwind} className='' style={{width:"50%",marginTop:"40px"}}/>
              <Card.Body>
                <Card.Title className='text-center'>Tailwind Css</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* javascript */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Card.Img variant="top" src={js} className='' style={{width:"50%",marginTop:"40px"}}/>
              <Card.Body>
                <Card.Title className='text-center'>Javascript (ES6+)</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* Recat */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={react} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>React-JS</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* Redux */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={redux} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Redux</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* angular */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={angular} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Angular</Card.Title>
              </Card.Body>
            </Card>
          </Col>

           <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             {/* node-js */}
             <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={node} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Node-JS</Card.Title>
              </Card.Body>
            </Card>
           </Col>

           <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             {/* express-js */}
             <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={express} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Express-JS</Card.Title>
              </Card.Body>
            </Card>
           </Col>

          <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* mongo-db */}
            <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src="https://img.icons8.com/color/200/mongodb.png" className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Mongo-DB</Card.Title>
              </Card.Body>
            </Card>
          </Col>

           <Col lg={3} md={6} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             {/* git */}
             <Card className='border-0 mt-5 cd1' style={{ width: '15rem', padding: "0px",display:"flex",justifyContent:"center",alignItems:"center"  }}>
              <Card.Img variant="top" src={git} className='' style={{width:"50%",marginTop:"40px"}} />
              <Card.Body>
                <Card.Title className='text-center'>Git</Card.Title>
              </Card.Body>
            </Card>
           </Col>

        </Row>
      </div>
    </>
  )
}

export default Skillls