import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a title="github" href="https://github.com/Pallabi-ghosh">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
          <a title="linkedin" href="https://www.linkedin.com/in/contactpallabi/">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
          <a title="dribbble" href="https://dribbble.com/Pallabi_Ghosh_Das">
            <i className="fa fa-dribbble" aria-hidden="true" />
          </a>
          <a title="twitter" href="https://twitter.com/PallabiGhoshDas">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Copyright{' '}
          <a href="https://github.com/Pallabi-ghosh" target="_blank" rel="noopener noreferrer">
            Pallabi Ghosh Das
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
