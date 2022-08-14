/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import simulator from '../../images/simulator.png';
import rock from '../../images/rock.png';
import android from '../../images/android.png';
import todo from '../../images/todo.png';

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Onboarding Flutter App</h3>
                  <div>
                    <p>
                      Flutter Onboarding app. This project is a starting point for a Flutter
                      application.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Pallabi-ghosh/Onboarding-flutter-app"
                  >
                    <i className="fa fa-github fa-lg" id="livedemo-icon" />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i id="livedemo-icon" className="fa fa-desktop fa-lg" />
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img src={simulator} style={{ width: 150 }} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">
                    Classic Rock, Paper, Scissors game
                  </h3>
                  <div>
                    <p>✂ Classic Rock, Paper, Scissors game with nice UI with react.</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Pallabi-ghosh/rock-paper-scissors-app"
                  >
                    <i className="fa fa-github fa-lg" id="livedemo-icon" />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i
                      id="livedemo-icon"
                      className="fa fa-desktop fa-lg"
                      href="https://merry-taiyaki-055dc8.netlify.app/"
                    />
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img src={rock} style={{ height: 150 }} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Android movie app</h3>
                  <div>
                    <p>
                      🎬 Application that displays a list of Movies, TV shows and Trending using the
                      Modern Android Application Development tools and API's.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Pallabi-ghosh/android-movie-app"
                  >
                    <i className="fa fa-github fa-lg" id="livedemo-icon" />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i id="livedemo-icon" className="fa fa-desktop fa-lg" />
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img src={android} style={{ height: 350 }} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">To-do-list with React</h3>
                  <div>
                    <p>A simple react 'shopping list' project.</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Pallabi-ghosh/Todo-List-with-React"
                  >
                    <i className="fa fa-github fa-lg" id="livedemo-icon" />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i id="livedemo-icon" className="fa fa-desktop fa-lg" />
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  <a target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img src={todo} style={{ height: 150 }} />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
