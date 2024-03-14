import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { AddRoleForm } from "../addRole/AddRoleModal";

export const FileUpload = () => {
  const [fileList, setFileList] = useState<File[] | null>(null);
  //@ts-ignore
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const [showAddRole, setShowAddRole] = useState(false);

  const preventDefaultHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
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
                  onClick={() => setShowAddRole(true)}
                  className="bg-violet-500 text-violet-50 px-2 py-1 rounded-md"
                >
                  Add Role and Upload
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
              {showAddRole ? (
                <AddRoleForm
                  fileList={fileList}
                  setFileList={setFileList}
                  open={showAddRole}
                  setOpen={setShowAddRole}
                />
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
