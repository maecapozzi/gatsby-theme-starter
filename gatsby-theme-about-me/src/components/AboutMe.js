import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Page = styled.section`
  background: #f7f7ff;
  height: 100vh;
`;

const Grid = styled.section`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "nav nav nav nav"
    "asideLeft main main main"
    "footer footer footer footer";
  grid-template-rows: 40px auto 80px;
  grid-template-columns: 4fr 4fr 4fr;
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

const Nav = styled.nav`
  color: #f7f7ff;
  grid-area: nav;
  border-bottom: 5px solid #577399;
`;

const AsideLeft = styled.aside`
  background: #f7f7ff;
  align-items: center;
  color: #577399;
  padding: 20px;
  grid-area: asideLeft;
  padding-top: 200px;
`;

const Main = styled.main`
  background: #577399;
  margin: 0 0 0 20px;
  padding: 20px;
  color: #f7f7ff;
  grid-area: main;
`;
const Footer = styled.footer`
  color: #f7f7ff;
  grid-area: footer;
  border-top: 5px solid #577399;
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
  margin: 0 20px;
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
        <Nav />
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
        <Footer />
      </Grid>
    </Page>
  );
};

export default AboutMe;
