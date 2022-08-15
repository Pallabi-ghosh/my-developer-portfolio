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
import pdf from '../../assets/cv.pdf';

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
                <img src={image} style={{ height: 400, width: 350 }} alt="profile-pic" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p>
                  I am a versatile and enthusiastic lady from India, living in Denmark for three
                  years. For the last two years, I have been working as a Frontend developer and
                  UI/UX designer. I have been working with Javascript, HTML/CSS, Swift and React
                  Native to deliver exceptional customer experiences. Adept at contributing to a
                  highly collaborative work environment, finding solutions, and determining customer
                  satisfaction.
                </p>
                <p>
                  Always positive and smiling attitude has garnered appreciations from my previous
                  teams. I am a good listener and always appreciate feedbacks. I am capable of
                  quickly adapting to changes. A team player who likes to have fun with everybody. I
                  aspire to work on impactful projects and contribute with all my skills as well as
                  learn continually. In my leisure time, I love running, watching movies with my
                  family, and decorating my home.
                </p>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <p className="about-cta">
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={pdf}
                      >
                        Resume
                      </a>
                    </span>
                  </p>
                </Fade>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
