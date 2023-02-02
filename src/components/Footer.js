import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className='footer'>
       <Container style={{width:"70%",margin:"0px auto"}}>
          <Row className='align-items-center'>
             <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 footer-par'>
             <p style={{color:"#fff"}}>Designed And Developed <span style={{color:"var(--main-color)",margin:"0px"}}>YOUSEF AHMED</span></p>
             </div>
             <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 footer-links'>
             <a href="https://www.instagram.com/yousef__1241/" style={{color:"#fff",fontSize:"20px"}} target="_blank"><i class="fa-brands fa-instagram"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="https://web.facebook.com/profile.php?id=100088567061728"  target="_blank" ><i class="fa-brands fa-facebook"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="https://twitter.com/Front_Joo" target="_blank"><i class="fa-brands fa-twitter"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="https://github.com/yousef1242?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
             </div>
          </Row>
       </Container>
    </footer>
  )
}
