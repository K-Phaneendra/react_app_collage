import React from "react";
import Card from "../../components/Card";

const Home = () => {
  const listOfProjects = [
    {
      name: "Audio to text",
      description: "Upload an audio file to get text as an output.",
      href: "/audio-to-text",
    },
    {
      name: "Dictate",
      description: "Dictate to your browser to get text as an output.",
      href: "/dictation",
    },
  ];
  return (
    <div className="listOfProjects">
      <h1 className="section-title">List of projects</h1>
      <div className="row">
        {listOfProjects.map((item, i) => {
          return (
            <div key={i} className="col-md-4 pb-3">
              <Card
                name={item.name}
                description={item.description}
                idx={i}
                href={item.href}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
