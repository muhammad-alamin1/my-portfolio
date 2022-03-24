import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './footer.css';

export default function Footer() {
    const year = new Date();
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["Muhammad"],
            typeSpeed: 100,
            backSpeed: 80,
            loop: Infinity,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer">
                        {/* <!-- social media --> */}
                        <ul className="social-icons" id="social-media">
                            <li>
                                <a href="mailto:muhammad.alamindev01@gmail.com" target="_blank">
                                    <i class="fas fa-at"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/muhammad-al-amin01/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/muhammad-alamin1" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer" >

                    </div>
                    <div className="col-md-4 footer" id="develop">
                        <h4> Developed by <strong ref={typeTarget} style={{ fontStyle: 'italic' }} ></strong></h4>
                        <h4>< i class="fas fa-map-marker-alt"></i> Barisal, Bangladesh</h4>
                        <Link to="/" class="scroll-link top-link"><i class="fas fa-arrow-up" title="Root"> </i></Link>
                    </div>
                </div>
                <br />
                <br />
                <h4 id="copy"> &copy; {year.getFullYear()} Muhammad All Rights Reserved </h4>
            </div>
        </div>
    )
}