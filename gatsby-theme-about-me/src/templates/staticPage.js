import React from "react";
import { graphql } from "gatsby";
import StaticPage from "../components/StaticPage";

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
  }
`;

const StaticPageTemplate = ({ data }) => {
  const { name, sections } = data.staticPage;
  return <StaticPage name={name} sections={sections} />;
};

export default StaticPageTemplate;
