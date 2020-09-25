import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function TopNavBar() {

    function scrollToTop() {
        scroll.scrollToTop();
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const navLinks = document.querySelector('.nav-links');
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            if(navLinks.classList.contains('nav-active')) {

            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
        }
        prevScrollpos = currentScrollPos;
    }

    function openMenu() {
        //console.log("do i get in here");
        const nav = document.querySelector('.nav-links');

        nav.classList.toggle('nav-active');
    }

    function closeMenu() {
        console.log("do i close?");
        const nav = document.querySelector('.nav-links');

        nav.classList.toggle('nav-active', false);
    }


    return (
        <nav className="nav" id="navbar">

            <div className="logo">
                <img
                    src={process.env.PUBLIC_URL + "/assets/nav-icon.png"}
                    className="nav-logo"
                    alt="Logo."
                    onClick={scrollToTop}
                />
            </div>

            <ul className="nav-links">
                <li onClick={closeMenu}>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        en.about
                </Link>
                </li>

                <li>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        en.experience
                </Link>
                </li>

                <li>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}>
                        en.projects
                </Link>
                </li>

                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        en.contact
                </Link>
                </li>
            </ul>

            <div className="burger" onClick={openMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>


        </nav>
    )
}

export default TopNavBar;