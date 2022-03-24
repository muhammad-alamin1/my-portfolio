import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0a192f' }}>
            <div className="container-fluid">
                <button className="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
                    <Link className="navbar-brand nav-header" to="/">Muhammad</Link>
                    <ul className="navbar-nav links me-auto mb-2 mb-lg-0">
                        <li className="nav-item text-center">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link " aria-current="page" to="/projects">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link " aria-current="page" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.linkedin.com/in/muhammad-al-amin01/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/muhammad-alamin1" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
