import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import axios from "axios";
export const FileUpload = () => {
  const [fileList, setFileList] = useState<File[] | null>(null);
  const [shouldHighlight, setShouldHighlight] = useState(false);

  const preventDefaultHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleUpload = async () => {
    // const UPLOAD_URL = "YOUR URL HERE";
    const UPLOAD_URL = "http://localhost:8000/upload/";
    const data = new FormData();

    for (let file of fileList!) {
      console.log(file);
      data.append(file.name, file);
    }
    try {
      console.log([...data.keys()]);

      const response = await axios.post(UPLOAD_URL, data);
      console.log(response); // Log the response if needed
      setFileList([]); // Clear fileList after successful upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <>
      <div
        onDragOver={(e) => {
          preventDefaultHandler(e);
          setShouldHighlight(true);
        }}
        onDragEnter={(e) => {
          preventDefaultHandler(e);
          setShouldHighlight(true);
        }}
        onDragLeave={(e) => {
          preventDefaultHandler(e);
          setShouldHighlight(false);
        }}
        onDrop={(e) => {
          preventDefaultHandler(e);
          const files = Array.from(e.dataTransfer.files);
          setFileList(files);
          setShouldHighlight(false);
        }}
        className="w-2/3 h-96 p-4 grid place-content-center cursor-pointer bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 border-4 border-dashed border-violet-100 hover:border-violet-500"
      >
        <div className="flex flex-col items-center">
          {!fileList ? (
            <>
              <CloudArrowUpIcon className="w-10 h-10" />
              <span>
                <span>Choose a File</span> or drag it here
              </span>
            </>
          ) : (
            <>
              <p>Files to Upload</p>
              {fileList.map((file, i) => {
                return <span key={i}>{file.name}</span>;
              })}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleUpload}
                  className="bg-violet-500 text-violet-50 px-2 py-1 rounded-md"
                >
                  Upload
                </button>
                <button
                  className="border border-violet-500 px-2 py-1 rounded-md"
                  onClick={() => {
                    setFileList(null);
                  }}
                >
                  Clear
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
