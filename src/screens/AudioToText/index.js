import React, { useState } from "react";
import { connect } from "react-redux";
import DropZone from "../../components/DropZone";
import Card from "../../components/Card";
import { Button, ListGroup } from "react-bootstrap";
import { UPLOAD_AND_CONVERT } from "../../redux/dispatchActions/AudioToText";
import { Input } from "antd";
import sample_voice_english from "../../assets/media/sample_voice_english.wav";
import { DustbinIcon } from "../../assets/icons/icons";

const { TextArea } = Input;

function AudioToText(props) {
  const [uploadedFile, setUploadedFile] = useState({});

  const deleteUploadedFile = () => {
    setUploadedFile({});
  };

  const displayUploadedItems = () => {
    if (Object.keys(uploadedFile).length > 0) {
      return (
        <div>
          <ListGroup>
            <ListGroup.Item>
              <div className="row">
                <div className="col-8">{uploadedFile.name}</div>
                <div className="col-4 text-right">
                  <DustbinIcon
                    fill="#dc3545"
                    onClick={deleteUploadedFile}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      );
    }
  };

  const submitUploadedFile = () => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    props.UPLOAD_AND_CONVERT(formData);
  };

  return (
    <div>
      <div className="text-center">
        <h1>Audio file to text</h1>
        <h3>
          Upload an audio file and the transcript of your audio will be
          displayed below
        </h3>
      </div>
      <div className="row">
        <div className="col-md-8 mb-2 mt-2">
          <DropZone
            setUploadedFile={(files) => setUploadedFile(files[0])}
            uploadedFile={uploadedFile}
            message="Drag and drop a .wav file here, or click to select one"
            accept="audio/wav"
          />
        </div>
        <div className="col-md-4 mb-2 mt-2">
          <Card
            name="Sample audio file"
            description="If you do not have an audio file to upload, you can download this sample audio file and upload it inorder to test the application.<br/>Note: Prefer chrome browser to do so"
            href={sample_voice_english}
            buttonName="Play audio"
          />
        </div>
      </div>
      <div className="pt-3">{displayUploadedItems()}</div>
      <div className="pt-3">
        <TextArea
          value={props.textFromAudio}
          placeholder="Converted text will display here"
          autoSize={{ minRows: 8, maxRows: 50 }}
        />
      </div>
      <div className="text-center pt-3">
        <Button
          type="primary"
          disabled={Object.keys(uploadedFile).length === 0}
          onClick={submitUploadedFile}
        >
          Upload and convert
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  textFromAudio: state.audioToText.textFromAudio,
});
const mapDispatchToProps = (dispatch) => {
  return {
    UPLOAD_AND_CONVERT: (body) => dispatch(UPLOAD_AND_CONVERT(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioToText);
