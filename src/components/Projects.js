import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import img1 from "../imgs/Screenshot_20221207_112021.png"
import img2 from "../imgs/Screenshot_20221209_124645.png"
import img3 from "../imgs/Screenshot_20221213_055610.png"
import img4 from "../imgs/Screenshot_20230119_120305.png"
import img5 from "../imgs/Screenshot_20230121_083230.png"
import img6 from "../imgs/Screenshot_20230121_083536.png"

export const Projects = () => {
  return (
    <>
       <div className='projects' id='project' style={{paddingTop:"130px",paddingBottom:"100px"}}>
          <Container>
          <h1 className='text-center py-5' style={{color:"#fff"}}>Project<span style={{color:"var(--main-color)"}}>s</span></h1>
             <Row>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img2} alt=""/>
                             <h4>Acadimia Website</h4>
                             <a href='https://yousef1242.github.io/acadimia/' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img3} alt=""/>
                              <h4>Khamst Clone</h4>
                             <a href='https://yousef1242.github.io/khamsat/' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img1} alt=""/>
                              <h4>Shoppig Website</h4>
                             <a href='https://yousef1242.github.io/shopping/#' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img6} alt=""/>
                              <h4>Calculator</h4>
                             <a href='https://yousef1242.github.io/calculator/' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img5} alt=""/>
                              <h4>E-commerce Website</h4>
                             <a href='https://e-commerce-ebon-five.vercel.app/' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
                <div className='col-xxl-4 col-lg-4 col-md-4 col-sm-6'>
                     <Card>
                          <Card.Body>
                             <img className='img-fluid'  src={img4} alt=""/>
                              <h4>Netflix Clone</h4>
                             <a href='https://netflex-clone-one.vercel.app/' target="-blank">Demo</a>
                          </Card.Body>
                     </Card>
                </div>
             </Row>
          </Container>
       </div>
    </>
  )
}
