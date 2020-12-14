import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <AppNav/>
            <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
            Welcome to YourMovie Application!
            </h2>
            <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>We will help you keep a list of movies you want to see!</h4>
            </div>
         );
    }
}
 
export default Home;