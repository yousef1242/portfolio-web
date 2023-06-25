import React from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

export const NavbarApp = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{ color: "#fff" }} href="#home">
            YOUSEF AHMED
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i
              style={{ color: "#fff", fontSize: "24px" }}
              className="fa-solid fa-bars-staggered"
            ></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <i class="fa-solid fa-house"></i>
                <NavLink class="nav-link" aria-current="page" href="#home">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-address-card"></i>
                <NavLink class="nav-link" aria-current="page" href="#aboutMe">
                  About Me
                </NavLink>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-graduation-cap"></i>
                <NavLink class="nav-link" aria-current="page" href="#skills">
                  Skills
                </NavLink>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-laptop-code"></i>
                <NavLink class="nav-link" aria-current="page" href="#project">
                  Projects
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
