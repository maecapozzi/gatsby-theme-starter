/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import Img from "gatsby-image";
import { jsx } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/theme";

const Links = ({ links }) => (
  <ul>
    {links.map(link => {
      return (
        <li>
          <a
            sx={{
              color: `${theme.colors.tertiary}`,
              fontSize: `14px`
            }}
            href={link.link}
          >
            <p>{link.name}</p>
          </a>
        </li>
      );
    })}
  </ul>
);

const AboutMe = ({ sections, bio, img }) => {
  return (
    <div
      sx={{
        background: `${theme.colors.primary}`
      }}
    >
      <div
        sx={{
          display: [`block`, `grid`],
          height: `100vh`,
          gridTemplateAreas: [``, `'asideLeft main'`],
          gridTemplateRows: [``, `auto`],
          gridTemplateColumns: [``, `2fr 10fr`]
        }}
      >
        <div
          sx={{
            background: `${theme.colors.secondary}`,
            alignItems: `center`,
            color: `${theme.colors.primary}`,
            gridArea: `asideLeft`,
            padding: [`20px`, `0px 200px`],
            textAlign: [`center`, `left`]
          }}
        >
          <div
            sx={{
              marginTop: [``, `25vh`]
            }}
          >
            <div
              sx={{
                display: "flex",
                justifyContent: `center`
              }}
            >
              <Img
                sx={{
                  borderRadius: `50%`,
                  height: `200px`,
                  width: `200px`
                }}
                fluid={img.node.childImageSharp.fluid}
              ></Img>
            </div>
            <div
              sx={{
                marginTop: `40px`
              }}
            >
              <p
                sx={{
                  fontSize: `16px`
                }}
              >
                {bio}
              </p>
            </div>
          </div>
        </div>
        <div
          sx={{
            background: `${theme.colors.primary}`,
            color: `${theme.colors.secondary}`,
            gridArea: `main`,
            padding: [`50px`, `230px 20px`],
            textAlign: [``, `left`],
            minWidth: `200px`
          }}
        >
          <div
            sx={{
              margin: [``, `0 20px`]
            }}
          >
            {sections.map(section => {
              return (
                <>
                  <h3>{section.header}</h3>
                  <Links links={section.links} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
