// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import Pdf from "../../assets/resume.pdf"

// function Navbar() {
//     return (
//         <nav className="navbar navbar-light bg-dark navbar">
//             <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/">Home</Link></span>
//             <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/projects">Projects</Link></span>
//             <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/contact">Contact</Link></span>
//             <span className="navbar-brand mb-0 h1 text-dark navlink"><a href={Pdf} target="_blank" rel="noopener noreferrer">Resumé</a></span>
//         </nav>
//     )
// }

// export default Navbar;

import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
// import { Button } from '../Button/Button';
import './Navbar.css'
 
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ashton Walden
                    {/* <i className="fab fa-react"></i> */}
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* If clicked the icon will change to an x and if not it will show bars */}
                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* If the ul is clicked the menu will show if not it will show the bars */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li className='nav-li' key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}

export default Navbar