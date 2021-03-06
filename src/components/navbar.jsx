import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light h3">
            <span>
                <img className ="mr-2" src='images/me.png' alt=""
                style={{width: "40px", height: "40px", borderRadius :"40%"}}
                />
                Achraf Counter
                <span className="badge badge-pill badge-success ml-2">{this.props.total}</span>
            </span>
            </nav> 

         );
    }
}
 
export default Navbar;