import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Pdf from "../../assets/resume.pdf"

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/">Home</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/projects">Projects</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/contact">Contact</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><a href={Pdf} target="_blank" rel="noopener noreferrer">Resumé</a></span>
        </nav>
    )
}

export default Navbar;

