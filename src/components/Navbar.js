import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarApp = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <Link class="navbar-brand" to="/" style={{color:"#fff"}}>Yousef Ahmed</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i style={{fontSize:"30px",color:"#fff"}} class="fa-solid fa-bars-staggered"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <i  class="fa-solid fa-house"></i>
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-graduation-cap"></i>
          <Link class="nav-link" to="skills">Skills</Link>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-laptop-code"></i>
          <Link class="nav-link" to="projects">Projects</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
