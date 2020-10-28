import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';
 
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
                                <div className={item.cName}>
                                <Link to={item.url} className='links'>
                                    {item.title}
                                </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar