/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import image from '../../images/image.png';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img src={image} style={{ height: 300 }} alt="profile-pic" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p>
                  I am working with web app development and UX design for one year. After, I
                  relocated to Denmark from India, I changed my profession from school teacher to IT
                  developer. After being graduated from&nbsp;
                  <a href="https://www.hackyourfuture.dk/">Hack Your Future.</a> I have gathered
                  professional working experiences from two startups in Copenhagen. Prior to that, I
                  have also worked as a freelance graphic designer for customers across the globe.
                </p>
                <p>
                  Always positive and smiling attitude has garnered appreciations from my previous
                  teams. I am a good listener and always appreciate feedbacks. I am capable of
                  quickly adapting to changes. A team player who likes to have fun with everybody. I
                  aspire to work on impactful projects and contribute with all my skills as well as
                  learn continually.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="./static/resume.pdf"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
