import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export const Skils = () => {
  return (
    <>
       <div className='profisional-skills' id='skills' style={{paddingTop:"110px"}}>
          <Container className="text-center">
          <h1 className='mb-4' style={{color:"#fff"}}>Professional <span style={{color:"var(--main-color)"}}>Skills</span></h1>
             <Row className='mb-5'>
                <div className='col-6 col-md-3 col-xm-3'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://clipground.com/images/html-logo-png-3.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-512.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://th.bing.com/th/id/OIP.fxMFAWgcs9ASnyZoIMeLJAAAAA?pid=ImgDet&rs=1'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://th.bing.com/th/id/R.3cb8875905a40a08e2c1e5e69aa901f0?rik=XMIS3uyAqBvIsg&riu=http%3a%2f%2fnightdeveloper.net%2fwp-content%2fuploads%2f2018%2f01%2f1200px-React-icon.svg_-768x542.png&ehk=siHbxiKD%2bSZf0XEeVofUKnQbMOesi%2bD9xFFoocXot1s%3d&risl=&pid=ImgRaw&r=0'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://devtechnosys.com/insights/wp-content/uploads/2019/06/express-js-logo.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xm-6'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3 col-xs-6 text-center'>
                   <Card>
                      <Card.Body>
                         <img className='img-fluid' alt='' src='https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png'/>
                      </Card.Body>
                   </Card>
                </div>
                <div className='col-6 col-md-3'>
                   <Card>
                      <Card.Body>
                         <img alt="" src="https://th.bing.com/th/id/R.ea369bf6341962619621f183a5d0b19d?rik=s4jf7Y3RPSKgXg&pid=ImgRaw&r=0"/>
                      </Card.Body>
                   </Card>
                </div>
             </Row>
          </Container>
       </div>
    </>
  )
}
