import React from 'react'
import {Container, Row} from "react-bootstrap"
import img1 from "../imgs/about.aee0f771.png"
import img2 from "../imgs/avatar.5852f40f.svg"
import { Projects } from './Projects'
import {Skils} from "./Skils"
import img3 from "../imgs/Get in touch-amico.png"
import video1 from "../imgs/Yellow Creative Free Food Delivery Video .mp4"



export const Home = () => {
  return (
    <>
      <div className='home-front ' id='home' style={{padding:"8rem 0rem 8rem 0rem"}}>
         <Container style={{width:"80%",margin:"0px auto"}}>
            <Row>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12' style={{paddingTop:"5rem"}}>
                  <h2 className='wow slideInLeft'  style={{color:"#fff",marginBlock:"20px"}} >Hello!<span className='wave'>👋</span></h2>
                  <h1 style={{fontWeight:"bold",color:"#fff",marginBottom:"40px"}}>I'M <span style={{color:"var(--main-color)"}}>YOUSEF AHMED</span></h1>
                  <h2 style={{color:"#fff",fontSize:"25px",}}>I'm  <i class="fa-solid fa-angle-right" style={{color:"var(--main-color)"}}></i> Front end developer</h2>
               </div>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 text-center img-section'>
                  <img alt=""  className='img-fluid' src={img1}/>
               </div>
            </Row>
         </Container>
      </div>
      <div className='home-about py-4' id='aboutMe'>
         <Container>
            <h1 className="text-center" style={{color:"#fff",marginBottom:"3rem"}}>ABOUT <span style={{color:"var(--main-color)"}}>ME</span></h1>
            <Row className='align-items-center' style={{lineHeight:"40px"}}>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12' style={{paddingTop:"70px",paddingLeft:"40px"}}>
                  <p style={{color:'white',fontSize:"19px"}}>I am <span style={{color:"var(--main-color)"}}>YOUSEF AHMED</span> , I am a <span style={{color:"var(--main-color)"}}>mern stack developer</span> with experience in developing web. I specialize in using programming languages such as <span style={{color:"var(--main-color)"}}>HTML, CSS, JavaScript, React, Nodejs, Expressjs and MongoDB</span>, as well as other frameworks like Bootstrap and Material-UI. I have experience in developing quality-supported systems, ensuring that the projects<span style={{color:"var(--main-color)"}}> I oversee are of the highest quality and performance</span> .</p>
               </div>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 text-center'>
               <img alt="" style={{    height: "290px"}} className='img-fluid' src={img2}/>
               </div>
            </Row>
            </Container>
      </div>
      <div className='video-section container py-5'>
         <video className='w-100 ' controls>
         <source className='img-fluid' src={video1} type='video/mp4'/>
         </video>
         <h2  style={{color:"#fff",textAlign:"center"}}>Check out my profile on fiverr: <a style={{fontSize:"16px"}} href='https://www.fiverr.com/yousefjoo766' target="_blank">https://www.fiverr.com/yousefjoo766</a></h2>
      </div>
      
            <Skils/>
            <Projects/>
            <div className='touch text-center py-5'>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img alt="" style={{height: "290px",display:"block"}} className='img-fluid' src={img3}/></p>
               <h1 style={{color:"#fff",marginBottom:"30px",fontSize:"40px"}}>Get In <span style={{color:"var(--main-color)"}}>Touch</span></h1>
               <a href="https://www.instagram.com/web_storm75/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
               <a style={{marginLeft:"20px"}} href="https://web.facebook.com/profile.php?id=100088567061728"  target="_blank" ><i class="fa-brands fa-facebook"></i></a>
               <a style={{marginLeft:"20px"}} href="http://wa.me/+01145667099" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
               <a style={{marginLeft:"20px"}} href="https://github.com/yousef1242?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
    </>
  )
}
