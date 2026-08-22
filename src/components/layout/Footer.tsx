import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../../config';

import SpectrumFooter from './SpectrumFooter';
import PyramidFooter from './PyramidFooter';

import './Footer.css';

const Footer: React.FC = () => {

  const location = useLocation();

  const isSpectrum = location.pathname.startsWith('/spectrum');
  const isPyramid = location.pathname.startsWith('/pyramid');

  const isOriginalPage =
    location.pathname === '/' ||
    location.pathname.startsWith('/test-series') ||
    location.pathname.startsWith('/results') ||
    location.pathname.startsWith('/study-materials') ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/course-registration' ||
    location.pathname === '/login';

  // ==========================================
  // ORIGINAL WEBSITE
  // ==========================================

  if (isOriginalPage) {
    return <OriginalLandingFooter />;
  }

  // ==========================================
  // SPECTRUM
  // ==========================================

  if (isSpectrum) {
    return <SpectrumFooter />;
  }

  // ==========================================
  // PYRAMID
  // ==========================================

  if (isPyramid) {
    return <PyramidFooter />;
  }

  return null;
};


// ==========================================
// ORIGINAL LANDING FOOTER
// ==========================================

const OriginalLandingFooter: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "https://www.facebook.com/people/Spectrum-By-Pyramid-Academy/61574901208336/",
    instagram: "https://www.instagram.com/spectrum_vellore/?hl=en",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/"
  });

  useEffect(() => {
    fetch(`${API_URL}/contact/spectrum`)
      .then(res => res.json())
      .then(data => {
        if (data && data.social_links) {
          setSocialLinks(data.social_links);
        }
      })
      .catch(err => console.error("Error fetching landing footer links from MongoDB:", err));
  }, []);

  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-content">

          {/* ==========================================
              CONTACT / REGISTER
              ========================================== */}

          <div className="footer-column">
            <h4>Contact Us</h4>

            <ul>
              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/course-registration">
                  Register For Course
                </Link>
              </li>
            </ul>
          </div>


          {/* ==========================================
              SOCIAL LINKS
              ========================================== */}

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


        {/* ==========================================
            COPYRIGHT
            ========================================== */}

        <div className="footer-bottom">

          <div className="copyright">

            <p>
              © 2025 SPECTRUM by Pyramid Academy. All rights reserved |
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
export default Footer;