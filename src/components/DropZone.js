import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import "../assets/styles/DropZone.css";
import { ToastMessage } from "./ToastMessage";
import PropTypes from 'prop-types';

function DropZone({
  setUploadedFile,
  message
}) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      ToastMessage('error', 'Invalid file', 'Please upload .wav file. <br/>Tip: You can get it if you record your voice and save it')
    } else {
      setUploadedFile(acceptedFiles);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'audio/wav'
  });

  return (
    <div {...getRootProps()} className="dropzone-area">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>
          <FaCloudUploadAlt /> Drop the files here ...
        </p>
      ) : (
        <p>
          <FaCloudUploadAlt /> {message}
        </p>
      )}
    </div>
  );
}

DropZone.propTypes = {
  message: PropTypes.string
}
DropZone.defaultProps = {
  message: 'Drag and drop file(s) here, or click to select file(s)'
}

export default DropZone;
