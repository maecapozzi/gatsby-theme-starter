import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.section`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr) repeat(1, 2fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Column = styled.div`
  background: gray;
`;

const Links = ({ links }) => (
  <ul>
    {links.map(link => {
      return (
        <li>
          <a href={link.link}>
            <p>{link.name}</p>
          </a>
        </li>
      );
    })}
  </ul>
);

const AboutMe = ({ data, sections, bio, name, img }) => {
  return (
    <>
      <Grid>
        <Column>
          <h1>{name}</h1>
          <Img fluid={img.node.childImageSharp.fluid}></Img>
          {sections.map(section => {
            return (
              <>
                <h3>{section.header}</h3>
                <Links links={section.links} />
              </>
            );
          })}
        </Column>
        <Column>
          <h1>Bio</h1>
          <p>{bio}</p>
        </Column>
      </Grid>
    </>
  );
};

export default AboutMe;
