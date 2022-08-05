/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container } from 'react-bootstrap';
import { BiCheck } from 'react-icons/bi';
import Title from '../Title/Title';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Title title="Services" />
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list__icons" />
                <p>Figma</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Blender.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Adobe Illustrator.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Sketch.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Miro.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Procreate.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Notion.</p>
              </li>
            </ul>
          </article>

          {/* End of UI/UX Design */}

          <article className="service">
            <div className="service__head">
              <h3>web Development</h3>
            </div>
            <ul className="service__list">
              <h4>In Frontend I work most with:</h4>
              <br></br>
              <li>
                <BiCheck className="service__list__icons" />
                <p>JavaScript.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Typescript.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>ReactJS.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>VueJS.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>React Native.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>NextJS.</p>
              </li>

              <li>
                <BiCheck className="service__list__icons" />
                <p>HTML, CSS, Bootstrap, Tailwind CCS.</p>
              </li>
              <h4>In Backend I work most with:</h4>
              <br></br>
              <li>
                <BiCheck className="service__list__icons" />
                <p>NodeJS.</p>
              </li>

              <li>
                <BiCheck className="service__list__icons" />
                <p>MongoDB.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>MySQL.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>RESTful API.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Firebase and much more.</p>
              </li>
            </ul>
          </article>

          {/* End of web development */}

          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list__icons" />
                <p>Web application.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Mobile application.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Design.</p>
              </li>
              <li>
                <BiCheck className="service__list__icons" />
                <p>Mentoring.</p>
              </li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Services;
