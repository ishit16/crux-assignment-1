import { useState } from "react";
import { useRecoilValue } from "recoil";
import { resumeObjectsState } from "../../atoms/resume_uploads";
import DetailsContainer from "./DetailsContainer";

export const DetailsModal = ({ open, setOpen }: any) => {
  const [activeButton, setActiveButton] = useState("college");
  const resumeObjects = useRecoilValue(resumeObjectsState);
  //@ts-ignore
  const collegeDetails = resumeObjects[0]?.resume_object?.college_details;
  //@ts-ignore
  const profExp = resumeObjects[0]?.resume_object?.professional_experience;
  //@ts-ignore
  const projects = resumeObjects[0]?.resume_object?.projects;
  let activeData = {};
  if (activeButton === "college") {
    activeData = collegeDetails;
  } else if (activeButton === "projects") {
    activeData = projects;
  } else if (activeButton === "professional") {
    activeData = profExp;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-gray-600 font-bold bg-gray-200 rounded-full">
                  IG
                </div>{" "}
                <span className="text-gray-700 font-semibold text-lg">
                  Ishit Garg
                </span>
                <p className="font-normal">email@iitb.ac.in</p>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700 absolute top-0 right-0 mt-3 mr-3"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center p-6 border-t border-solid border-slate-200 rounded-b gap-y-2">
              <div className="flex flex-row bg-slate-200 rounded-md">
                <button
                  className="text-gray-700 font-semibold p-2"
                  onClick={() => setActiveButton("college")}
                >
                  <span
                    className={`hover:bg-white p-1 rounded-lg ${
                      activeButton === "college" ? "bg-white" : ""
                    }`}
                  >
                    College
                  </span>
                </button>
                <button
                  className="text-gray-700 font-semibold p-2"
                  onClick={() => setActiveButton("projects")}
                >
                  <span
                    className={`hover:bg-white p-1 rounded-lg ${
                      activeButton === "projects" ? "bg-white" : ""
                    }`}
                  >
                    Projects
                  </span>
                </button>
                <button
                  className="text-gray-700 font-semibold p-2"
                  onClick={() => setActiveButton("professional")}
                >
                  <span
                    className={`hover:bg-white p-1 rounded-lg ${
                      activeButton === "professional" ? "bg-white" : ""
                    }`}
                  >
                    Professional Experience
                  </span>
                </button>
              </div>
              <div className="flex flex-col p-2">
                <DetailsContainer data={activeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
