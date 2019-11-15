import React from "react";
import { graphql } from "gatsby";
import AboutMe from "../components/AboutMe";

export const query = graphql`
  query($pageId: String!) {
    staticPage(id: { eq: $pageId }) {
      name
      sections {
        id
        description
        header
      }
      id
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        relativePath: { eq: "profile-pic.jpg" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const AboutMeTemplate = ({ data }) => {
  let image;
  data.allFile.edges.forEach(img => {
    image = img;
  });

  const { name, sections } = data.staticPage;
  return <AboutMe name={name} sections={sections} img={image} />;
};

export default AboutMeTemplate;
