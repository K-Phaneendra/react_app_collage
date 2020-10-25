import React, { useState } from "react";
import DropZone from "../../components/DropZone";
import { Button, ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { uploadFile, convertAudioToText } from "../../actions/FlaskAPICalls";
import { ToastMessage } from "../../components/ToastMessage";
import { Input } from "antd";

const { TextArea } = Input;

export default function SpeechToText() {
  const [uploadedFile, setUploadedFile] = useState({});
  const [convertedText, setConvertedText] = useState("");

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
                  <FaTrashAlt
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

  const submitUploadedFile = async () => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    const APIResponse = await uploadFile(formData);
    if (APIResponse.data.status === "failed") {
      ToastMessage("error", "Failed to upload", APIResponse.data.message);
    }
    if (APIResponse.data.status === "success") {
      ToastMessage(
        "success",
        "Uploaded successfully",
        APIResponse.data.message
      );
      const uploadedFileName = APIResponse.data.filename;
      const audioToTextResponse = await convertAudioToText(uploadedFileName);
      if (audioToTextResponse.data.status === "failed") {
        ToastMessage(
          "error",
          "Failed to convert",
          audioToTextResponse.data.message
        );
        setConvertedText("");
      }
      // if success we receive converted text
      if (audioToTextResponse.data.length > 0) {
        setConvertedText(audioToTextResponse.data);
      }
    }
  };

  return (
    <div>
      <div>
        <DropZone
          setUploadedFile={(files) => setUploadedFile(files[0])}
          uploadedFile={uploadedFile}
        />
      </div>
      <div className="pt-3">{displayUploadedItems()}</div>
      <div className="pt-3">
        <TextArea
          value={convertedText}
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
