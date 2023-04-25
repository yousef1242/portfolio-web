import React from 'react'
import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className='footer'>
       <Container style={{width:"70%",margin:"0px auto",textAlign:"center"}}>
             <div className='footer-par'>
             <p style={{color:"#fff"}}>Designed And Developed <span style={{color:"var(--main-color)",margin:"0px"}}>YOUSEF AHMED</span></p>
             </div>
             <div className='mail' style={{marginBottom:"1rem"}}>
             <span style={{color:"var(--main-color)",marginBottom:"20px",fontSize:"20px"}}>Email: </span>
                <a style={{color:"#fff",fontSize:"18px"}} href='mailto:joooy045@gmail.com'>joooy045@gmail.com</a>
             </div>
             <div className='mail' style={{marginBottom:"1rem"}}>
             <span style={{color:"var(--main-color)",marginBottom:"20px",fontSize:"20px"}}>Phone: </span>
                <a style={{color:"#fff",fontSize:"18px"}} href='tel:+01145667099'>01145667099</a>
             </div>
             <div className='footer-links text-center'>
             <a href="https://www.instagram.com/web_storm75/" style={{color:"#fff",fontSize:"20px"}} target="_blank"><i class="fa-brands fa-instagram"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="https://web.facebook.com/profile.php?id=100088567061728"  target="_blank" ><i class="fa-brands fa-facebook"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="http://wa.me/+01145667099" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
             <a style={{marginLeft:"20px",color:"#fff",fontSize:"20px"}} href="https://github.com/yousef1242?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
             </div>
       </Container>
    </footer>
  )
}
