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
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-address-card"></i>
          <a class="nav-link" aria-current="page" href="#aboutMe">About Me</a>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-graduation-cap"></i>
        <a class="nav-link" aria-current="page" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
        <i class="fa-solid fa-laptop-code"></i>
        <a class="nav-link" aria-current="page" href="#project">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
