import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Page = styled.section`
  background: #f7f7ff;
  height: 100vh;
`;

const Grid = styled.section`
  @media (min-width: 768px) {
    display: grid;
    height: 100vh;
    grid-template-areas: "asideLeft main main main";
    grid-template-rows: auto;
    grid-template-columns: 4fr 4fr 4fr;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledImage = styled(Img)`
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;

const AsideLeft = styled.aside`
  background: #577399;
  align-items: center;
  color: #f7f7ff;
  padding: 20px 100px;
  text-align: center;
  grid-area: asideLeft;
  @media (min-width: 768px) {
    padding-top: 200px;
    text-align: left;
  }
`;

const Main = styled.main`
  background: #f7f7ff;
  color: #577399;
  grid-area: main;
  padding: 50px;
  @media (min-width: 768px) {
    padding: 230px 20px;
    margin: 0 0 0 20px;
  }
`;

const StyledLink = styled.a`
  color: #fe5f55;
  font-size: 14px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Bio = styled.div`
  margin: 40px 0;
`;

const LinksSection = styled.div`
  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const Links = ({ links }) => (
  <ul>
    {links.map(link => {
      return (
        <li>
          <StyledLink href={link.link}>
            <p>{link.name}</p>
          </StyledLink>
        </li>
      );
    })}
  </ul>
);

const AboutMe = ({ data, sections, bio, name, img }) => {
  return (
    <Page>
      <Grid>
        <AsideLeft>
          <StyledImageWrapper>
            <StyledImage fluid={img.node.childImageSharp.fluid}></StyledImage>
          </StyledImageWrapper>
          <Bio>
            <h2>Bio</h2>
            <Text>{bio}</Text>
          </Bio>
        </AsideLeft>
        <Main>
          <LinksSection>
            {sections.map(section => {
              return (
                <>
                  <h3>{section.header}</h3>
                  <Links links={section.links} />
                </>
              );
            })}
          </LinksSection>
        </Main>
      </Grid>
    </Page>
  );
};

export default AboutMe;
