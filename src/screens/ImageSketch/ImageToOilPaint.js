import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { Button, Card } from "react-bootstrap";

import DropZone from "../../components/DropZone";

import {
  UPLOAD_IMAGE,
  DELETE_IMAGE,
  UPLOAD_IMAGE_TO_SKETCH,
  DELETE_FILES_PRESENT_IN_UPLOAD_FOLDER,
} from "../../redux/dispatchActions/ImageSketch";
import { imageToSketch_UPLOADED_FILENAME } from "../../redux/reducerActions";
import Slider from "../../components/Slider";

function ImageToOilPaint(props) {
  const { tabKey } = props;
  const [uploadedFile, setUploadedFile] = useState({});
  // values of S and R given by the user
  const [sigmaS, setSigmaS] = useState(0); // min = 0, max = 200, step = 1
  const [sigmaR, setSigmaR] = useState(0); // min = 0, max = 1, step = 0.1
  const [previewImage, setPreviewImage] = useState("");

  // once user opens this page, then delete the existing images present on the server
  useEffect(() => {
    props.DELETE_FILES_IN_UPLOADED_FOLDER();
  }, [])

  useEffect(() => {
    // if uploaded file is available
    if (Object.keys(uploadedFile).length > 0 && !props.errorOnUpload) {
      generatePreviewImageURL();
    }
    // file is uploaded by the user but the API say that there is error on upload, then remove the uploaded file on UI
    if (Object.keys(uploadedFile).length > 0 && props.errorOnUpload) {
      // file is not valid - hence remove it
      setUploadedFile({});
      setPreviewImage("");
      const body = {
        filename: "",
        error: false,
        convertedImage: null,
      };
      props.emptyUploadedFile(body);
    }
  }, [uploadedFile, props.errorOnUpload]);

  const uploadAFile = (files) => {
    setUploadedFile(files[0]);
  };

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
        setPreviewImage(imgString);
      }
    } catch (err) {
      setPreviewImage("");
    }
  };

  // SUBMIT UPLOADED IMAGE
  const submitUploadedFile = () => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    props.UPLOAD_IMAGE(formData);
  };

  // DELETE UPLOADED FILE
  const deleteUploadedFile = () => {
    try {
      if (props.uploadedFilename) {
        const body = {
          filename: props.uploadedFilename,
        };
        props.DELETE_IMAGE(body);
      }
      setUploadedFile({})
      setPreviewImage("")
    } catch (err) {
      return "";
    }
  };

  // submit the widget values to the API
  const submitWidgetValues = () => {
    const body = {
      filename: props.uploadedFilename,
      conversionType: tabKey,
      widgetParameters: {
        sigma_s: sigmaS,
        sigma_r: sigmaR,
      },
    };
    props.UPLOAD_IMAGE_TO_SKETCH(body);
  };

  // once user has uploaded the file, then send that file to the server
  useEffect(() => {
    if (Object.keys(uploadedFile).length > 0) {
      // file is available, hence upload it to the server
      submitUploadedFile();
    }
  }, [uploadedFile]);

  // if slider value gets updated, then send the values to the API
  useEffect(() => {
    if (!sigmaS && !sigmaR) {
      // both are empty
    } else {
      submitWidgetValues();
    }
  }, [sigmaS, sigmaR]);

  return (
    <>
      <div className="m-2">
        <h2>Upload an image to create an oil paint out of it</h2>
      </div>
      <div className="row mb-2 mt-2">
        <DropZone
          setUploadedFile={uploadAFile}
          message="Drag and drop an image here, or click to select one"
          accept="image/*"
          className="full-width"
        />
      </div>
        <div className="row mt-3">
          <div className="col-md-6 display-contents">
            {/* Image preview here */}
            {/* Image preview will be displayed only if image is uploaded */}
            {previewImage && (
              <img
                src={previewImage}
                title="image preview"
                alt="preview"
                height={300}
                className="border border-dark mt-2 mb-2"
              />
            )}
            {/* Image predicted */}
            {/* predicted image will be displayed only if image is available */}
            {props.convertedImage && (
              <img
                src={props.convertedImage}
                title="image predicted"
                alt="predicted"
                height={300}
                className="border border-dark mt-2 mb-2"
              />
            )}
          </div>

          <div className="col-md-6">
            {/* show toggles only if an image is uploaded */}
            {Object.keys(uploadedFile).length > 0 && (
              <Card body className="mt-2">
                {/* Sigma S */}
                <label>S</label>&nbsp;
                <Slider
                  updateSliderValue={setSigmaS}
                  min={0}
                  max={200}
                  step={1}
                />
                {/* Sigma R */}
                <label>R</label>&nbsp;
                <Slider
                  updateSliderValue={setSigmaR}
                  min={0}
                  max={1}
                  step={0.1}
                />
              </Card>
            )}
          </div>
        </div>
      <div className="text-center pt-3">
        <Button
          variant="danger"
          disabled={Object.keys(uploadedFile).length === 0}
          onClick={deleteUploadedFile}
        >
          Delete image
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  uploadedFilename: state.imageToSketch.uploadedFilename,
  errorOnUpload: state.imageToSketch.errorOnUpload,
  convertedImage: state.imageToSketch.convertedImage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    // used to upload an image to the server
    UPLOAD_IMAGE: (body) => dispatch(UPLOAD_IMAGE(body)),
    // used to delete an image from the server
    DELETE_IMAGE: (body) => dispatch(DELETE_IMAGE(body)),
    // upload image and the widget values to the API
    UPLOAD_IMAGE_TO_SKETCH: (body) => dispatch(UPLOAD_IMAGE_TO_SKETCH(body)),
    emptyUploadedFile: (body) =>
      dispatch(imageToSketch_UPLOADED_FILENAME(body)),
    DELETE_FILES_IN_UPLOADED_FOLDER: () => dispatch(DELETE_FILES_PRESENT_IN_UPLOAD_FOLDER())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageToOilPaint);
