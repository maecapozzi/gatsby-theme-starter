import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Section = styled.section`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr) repeat(1, 2fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Div = styled.div`
  background: gray;
`;

const AboutMe = ({ data, sections, name, img }) => {
  return (
    <>
      {sections.map(section => {
        return (
          <Section>
            <Div>
              <h1>{name}</h1>
              <Img fluid={img.node.childImageSharp.fluid}></Img>
              <h3>Find me on the internet</h3>
              <ul>
                <li>
                  <a href="https://github.com/maecapozzi">
                    <p>Github</p>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/maecapozzi">
                    <p>Twitter</p>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/maecapozzi">
                    <p>LinkedIn</p>
                  </a>
                </li>
                <h3>My projects</h3>
                <li>
                  <p>This Gatsby theme</p>
                </li>
              </ul>
              <h3>Work</h3>
              <ul>
                <li>501 Auctions</li>
                <li>Thrive Global</li>
                <li>InRhythm</li>
                <li>Harry's</li>
              </ul>
            </Div>
            <Div>
              <h1>Bio</h1>
              <p>{section.description}</p>
            </Div>
          </Section>
        );
      })}
    </>
  );
};

export default AboutMe;
