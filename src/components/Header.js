import React from 'react'
import logo from '../components/logo-removebg-preview.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav w-100 justify-content-between align-items-center">
                    <li class="nav-item">
                        <Link to='/'><a class="nav-link" aria-current="page" href="#"><img src={logo} /></a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/AboutMe'><a class="nav-link " aria-current="page" href="#">About Me</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <Link to='/Skills'><a class="nav-link" href="#">Skills</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header