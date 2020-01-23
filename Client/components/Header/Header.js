import React, { Component } from 'react';
import Navigation from '../Navigation/MainNavigation';
import Logo from '../Atoms/Logo';

class Header extends Component {
    componentWillUnmount() {
    } 

    render() {        
        return (
           <header>
               <Logo size="medium" />
               <Navigation />
           </header>             
        );
    }
}
  
export default Header;