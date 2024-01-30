import React from "react";
import {  NavLink,useLocation } from "react-router-dom";
import { Navbar, Nav, NavItem,} from 'react-bootstrap';
import Logo from '../Home/OIG.jpg'

const Navs =()=>{
  const location = useLocation()

    return(

      <>
    <Navbar expand="lg" bg="dark" variant="dark">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
        <Navbar.Collapse id="navbarTogglerDemo01">
          <Navbar.Brand className="text-capitalize text-danger" href="/">
            <img src={Logo} alt="" className="logo" height='30px' width='60px'/>
          </Navbar.Brand>
          <Nav className="me-auto mb-2 mb-lg-0">
            <NavItem>
              {location.pathname!=='/' &&(              <NavLink to={'/'} className="nav-link active text-danger" >Home</NavLink>
)}
            </NavItem>
            <NavItem>
              {location.pathname!=='/movie' && (<NavLink to={'/movie'} className="nav-link active text-danger" >Movie</NavLink>
)}
            </NavItem>
            <NavItem>
              {location.pathname!=='/search' && (<NavLink to={'/search'}className='nav-link active text-danger'>Seacrh</NavLink>)}
            </NavItem>
          </Nav>

        
        </Navbar.Collapse>
      </div>

    </Navbar>

      </>
    )
}
export default Navs