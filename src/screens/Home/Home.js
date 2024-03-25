import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import paths from "../../Router/paths.json";
import { PAGE_VIEWS } from "../../redux/dispatchActions/Home";

const Home = (props) => {
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
    {
      name: "Chat",
      description: "This is an LLM chatbot, which is using Langchain and Pinecone(Vector DB) behind the scenes",
      href: paths.chat,
    },
  ];

  useEffect(() => {
    props.PAGE_VIEWS();
  }, []);
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    PAGE_VIEWS: () => dispatch(PAGE_VIEWS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
