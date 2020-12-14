import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand,NavLink} from 'reactstrap';

class AppNav extends Component {
    state = {  }
    render() { 
        return (
            <div>
              <Navbar color="success" dark expand="md">
                <NavbarBrand href="/">YourMovie Application</NavbarBrand>
                
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/"><b>Home</b></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/categories"><b>Categories</b></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/expenses"><b>Movies</b></NavLink>
                    </NavItem>
                  </Nav>
              </Navbar>
            </div>
          );
    }
}
 
export default AppNav;