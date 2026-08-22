import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';

import './Footer.css';

const PyramidFooter: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/"
  });

  useEffect(() => {
    fetch(`${API_URL}/contact/pyramid`)
      .then(res => res.json())
      .then(data => {
        if (data && data.social_links) {
          setSocialLinks(data.social_links);
        }
      })
      .catch(err => console.error("Error fetching footer links from MongoDB:", err));
  }, []);
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-column">
            <h4>About Pyramid</h4>

            <ul>
              <li>
                <Link to="/pyramid/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/pyramid/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pyramid/course-registration">
                  Register For Course
                </Link>
              </li>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Courses</h4>

            <ul>
              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid">
                  All Courses
                </Link>
              </li>

              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid/foundation">
                  Foundation Program
                </Link>
              </li>

              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid/power-program">
                  Power Program
                </Link>
              </li>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Spoken English</h4>

            <ul>
              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid/english/basic">
                  Basic
                </Link>
              </li>

              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid/english/advanced">
                  Advance
                </Link>
              </li>

              <li>
                <Link to="/pyramid/PyramidCoursesPage/pyramid/english/practical">
                  Pratical
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
                      <h4>Resources</h4>
          
                      <ul>
                        <li>
                          <Link to="/pyramid/study-materials">
                            Study Materials
                          </Link>
                        </li>
          
                        {/* <li>
                          <Link to="/pyramid/results">
                            Results
                          </Link>
                        </li> */}
                      </ul>
                    </div>


          <div className="footer-column">
            <h4>Connect With Us</h4>

            <div className="social-icons">

              <a
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href={socialLinks.youtube}
                aria-label="YouTube"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>
          </div>

        </div>


        <div className="footer-bottom">

          <div className="copyright">

            <p>
              © 2025 Pyramid Academy. All rights reserved |
              {' '}Crafted by{' '}

              <a
                href="https://scorpioninfotechsolutions.in"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#2a50a2',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Scorpion Infotech Solutions
              </a>

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default PyramidFooter;