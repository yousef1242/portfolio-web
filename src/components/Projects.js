import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { projects } from '../projectjs'

export const Projects = () => {
     const [category, setcategory] = useState('all')
     const getCategory = (catName) => {
          setcategory(catName)
     }
     const projectsFilter = projects.filter(
          (project) => category === 'all' || project.category === category
        );
  return (
    <>
       <div className='projects' id='project' style={{paddingTop:"110px",paddingBottom:"0px"}}>
          <Container>
          <h1 className='text-center py-5' style={{color:"#fff"}}>Project<span style={{color:"var(--main-color)"}}>s</span></h1>
          <div className='text-center mb-5'>
               <button className={category === 'all' ? "buttonFilter mb-3" : "mb-3"} style={{background:'none',padding:"5px",color : "#fff",outline:"none",border:"1px solid var(--main-color)",fontSize:'20px'}} onClick={() => getCategory('all')}>All</button>
               <button className={category === 'html&css&js' ? "buttonFilter mb-3" : ' mb-3'} style={{background:'none',padding:"5px",color : "#fff",outline:"none",border:"1px solid var(--main-color)",marginLeft:"20px",fontSize:'20px'}} onClick={() => getCategory('html&css&js')}>Html&Css&js</button>
               <button className={category === 'reactjs' ? "buttonFilter mb-3" : ' mb-3'} style={{background:'none',padding:"5px",color : "#fff",outline:"none",border:"1px solid var(--main-color)",marginLeft:"20px",fontSize:'20px'}} onClick={() => getCategory('reactjs')}>Reactjs</button>
               <button className={category === 'nodejs' ? "buttonFilter mb-3 ms-0 ms-sm-3" : ' mb-3 mb-3 ms-0 ms-sm-3'} style={{background:'none',padding:"5px",color : "#fff",outline:"none",border:"1px solid var(--main-color)",marginLeft:"20px",fontSize:'20px'}} onClick={() => getCategory('nodejs')}>Nodejs</button>
          </div>
              <Row>
            {
               projectsFilter.map((project) => {
                    return(
                         <div className='col-sm-6 col-md-4 col-lg-3'>
                              <Card>
                                   <Card.Body>
                                      <img className='img-fluid'  src={project.image} alt=""/>
                                       <h4>{project.name}</h4>
                                      <a href={project.link} target="-blank">Demo</a>
                                   </Card.Body>
                              </Card>
                         </div>
                    )
               })
            }
             </Row>
          </Container>
       </div>
    </>
  )
}
