import React from "react";

const StaticPage = ({ sections, name }) => {
  return (
    <>
      <h1>{name}</h1>
      {sections.map(section => {
        return (
          <div key={section.id}>
            <h1>{section.header}</h1>
            <p>{section.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default StaticPage;
