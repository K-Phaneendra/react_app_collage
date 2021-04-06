import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import Chris_evans_Image from '../../assets/media/Chris_evans.jpg'
import Card from "../../components/Card";
import DropZone from "../../components/DropZone";
import { UPLOAD_FACE_IMAGE } from "../../redux/dispatchActions/FaceRecognition";
import { faceRecognition_PREDICT_GENDER } from "../../redux/reducerActions";

function FaceRecognition(props) {
  const [uploadedFile, setUploadedFile] = useState({});
  const [previewImage, setPreviewImage] = useState("");
  const [previewImageDimensions, setPreviewImageDimensions] = useState({}); // { w: number, h: number }
  // const [predictedImage, setPredictedImage] = useState("");

  const generatePreviewImageURL = async () => {
    try {
      if (Object.keys(uploadedFile).length) {
        const reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        const imgString = await new Promise((resolve) => {
          reader.onload = function (e) {
            resolve(e.target.result);
          };
        });
        generatePreviewImageDimensions(imgString);
        setPreviewImage(imgString);
      }
    } catch (err) {
      setPreviewImage("");
    }
  };

  const generatePreviewImageDimensions = async (imgString) => {
    try {
      const i = new Image();
      const imgDimensions = await new Promise((resolve) => {
        i.onload = function () {
          resolve({ w: i.width, h: i.height });
        };
        i.src = imgString;
      });
      setPreviewImageDimensions(imgDimensions);
    } catch (err) {
      setPreviewImage("");
    }
  };

  useEffect(() => {
    generatePreviewImageURL();
    generatePreviewImageDimensions();
    props.empty_predicted_image();
  }, [uploadedFile]);

  const getPreviewImageWidth = () => {
    try {
      if (Object.keys(previewImageDimensions).length) {
        const aspect = previewImageDimensions.w / previewImageDimensions.h;
        const width = 300 * aspect;
        return width;
      } else {
        throw {
          message: "image is not yet uploaded",
        };
      }
    } catch (err) {
      return "300";
    }
  };

  // SUBMIT UPLOADED IMAGE
  const submitUploadedFile = () => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    props.UPLOAD_FACE_IMAGE(formData);
  };

  return (
    <div>
      <div className="text-center">
        <h1>Face recognition</h1>
        <h3>
          Upload an image with human face, my machine learning model will tell
          if it is a male or female face
        </h3>
      </div>

      <div className="row">
        <div className="col-md-8 mb-2 mt-2">
          <DropZone
            setUploadedFile={(files) => setUploadedFile(files[0])}
            message="Drag and drop an image here, or click to select one"
            accept="image/*"
          />
        </div>
        <div className="col-md-4 mb-2 mt-2">
          <Card
            name="Sample image"
            description="If you do not have an image to upload, you can download this sample image and upload it to test the application.<br/>Note: Prefer chrome browser to do so"
            href={Chris_evans_Image}
            buttonName="Show image"
          />
        </div>
      </div>
      <div className="mt-3">
        <div className="row justify-content-between pl-3 pr-3">
          {/* Image preview here */}
          <img
            src={previewImage}
            title="image preview"
            alt="preview"
            width={getPreviewImageWidth()}
            height={300}
            className="border border-dark mt-2 mb-2"
          />
          {/* Image predicted */}
          <img
            src={props.predictedImage}
            title="image predicted"
            alt="predicted"
            width={getPreviewImageWidth()}
            height={300}
            className="border border-dark mt-2 mb-2"
          />
        </div>
      </div>
      <div className="text-center pt-3">
        <Button
          type="primary"
          disabled={Object.keys(uploadedFile).length === 0}
          onClick={submitUploadedFile}
        >
          Upload and predict
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  predictedImage: state.faceRecognition.predictedImage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    UPLOAD_FACE_IMAGE: (body) => dispatch(UPLOAD_FACE_IMAGE(body)),
    empty_predicted_image: () => dispatch(faceRecognition_PREDICT_GENDER("")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FaceRecognition);
