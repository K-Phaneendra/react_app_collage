import React from "react";
import Card from "../../components/Card";
import paths from "../../Router/paths.json";

const Home = () => {
  const listOfProjects = [
    {
      name: "Audio to text",
      description: "Upload an audio file to get text as an output.",
      href: paths.audioToText,
    },
    {
      name: "Dictate",
      description: "Dictate to your browser to get text as an output.",
      href: paths.dictation,
    },
    {
      name: "Face recognition",
      description:
        "Upload an image with human face, my machine learning model will tell if it is a male or female face",
      href: paths.faceRecognition,
    },
    {
      name: "Sketch an image",
      description: "Upload an image and create a sketch out of it",
      href: paths.imageSketch,
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
