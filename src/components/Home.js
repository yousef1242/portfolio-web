import React from 'react'
import {Container, Row} from "react-bootstrap"
import img1 from "../imgs/Operating system-amico.png"
import img2 from "../imgs/avatar.5852f40f.svg"
import { Projects } from './Projects'
import {Skils} from "./Skils"
import img3 from "../imgs/Get in touch-amico.png"

export const Home = () => {
  return (
    <>
      <div className='home-front ' id='home' style={{padding:"12rem 0rem 12rem 0rem"}}>
         <Container style={{width:"80%",margin:"0px auto"}}>
            <Row>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 ' style={{paddingTop:"5rem"}}>
                  <h2 style={{color:"#fff",marginBlock:"20px"}}>Hello!</h2>
                  <h1 style={{fontWeight:"bold",color:"#fff",marginBottom:"40px"}}>I'M <span style={{color:"var(--main-color)"}}>YOUSEF AHMED</span></h1>
                  <p style={{color:"#fff",fontSize:"20px",}}>Iam a front end developer and freelancer</p>
               </div>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 text-center'>
                  <img alt="" style={{    height: "423px"}} className='img-fluid' src={img1}/>
               </div>
            </Row>
         </Container>
      </div>
      <div className='home-about py-4' id='aboutMe'>
         <Container>
            <h1 className="text-center" style={{color:"#fff",marginBottom:"5rem"}}>ABOUT <span style={{color:"var(--main-color)"}}>ME</span></h1>
            <Row className='align-items-center' style={{lineHeight:"40px"}}>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12' style={{paddingTop:"70px",paddingLeft:"40px"}}>
                  <p style={{color:'white',fontSize:"19px"}}>I am <span style={{color:"var(--main-color)"}}>YOUSEF AHMED</span> , I am a front-end developer with experience in developing web. I specialize in using programming languages such as <span style={{color:"var(--main-color)"}}>HTML, CSS, JavaScript, and React</span>, as well as other frameworks like Bootstrap and Material-UI. I have experience in developing quality-supported systems, ensuring that the projects<span style={{color:"var(--main-color)"}}> I oversee are of the highest quality and performance</span> .</p>
               </div>
               <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 text-center'>
               <img alt="" style={{    height: "290px"}} className='img-fluid' src={img2}/>
               </div>
            </Row>
            </Container>
            </div>
            <Skils/>
            <Projects/>
            <div className='touch text-center py-5'>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img alt="" style={{height: "290px",display:"block"}} className='img-fluid' src={img3}/></p>
               <h1 style={{color:"#fff",marginBottom:"30px",fontSize:"40px"}}>Get In <span style={{color:"var(--main-color)"}}>Touch</span></h1>
               <a href="https://www.instagram.com/yousef__1241/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
               <a style={{marginLeft:"20px"}} href="https://web.facebook.com/profile.php?id=100088567061728"  target="_blank" ><i class="fa-brands fa-facebook"></i></a>
               <a style={{marginLeft:"20px"}} href="https://twitter.com/Front_Joo" target="_blank"><i class="fa-brands fa-twitter"></i></a>
               <a style={{marginLeft:"20px"}} href="https://github.com/yousef1242?tab=repositories" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
    </>
  )
}
