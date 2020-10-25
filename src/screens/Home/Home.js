import React from "react";
import Card from "../../components/Card";

const Home = () => {
  const listOfProjects = [
    {
      name: "Speech to text",
      description: "Upload an audio file to get text as an output",
      href: "/speech-to-text"
    },
  ];
  return (
    <div className="listOfProjects">
      <h1 className="section-title">List of projects</h1>
      {listOfProjects.map((item, i) => {
        return (
          <Card
            name={item.name}
            description={item.description}
            idx={i}
            href={item.href}
          />
        );
      })}
    </div>
  );
};

export default Home;
