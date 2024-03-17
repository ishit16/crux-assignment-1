import { useState } from "react";
import { DetailsModal } from "./DetailsModal";

export const CandidateTableRow = ({
  initials,
  name,
  relevancy_score,
  resume_link,
  details,
}: any) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const handleDownloadResume = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = resume_link;
    link.download = "resume.jpg"; // Set the default download filename, adjust as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-gray-600 font-bold bg-gray-200 rounded-full">
                {initials}
              </div>{" "}
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{name}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{relevancy_score}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {/* Render the "Download Resume" link */}
          <button
            onClick={handleDownloadResume}
            className="text-blue-500 hover:underline"
          >
            Download Resume
          </button>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <button
              onClick={() => setOpenDetailsModal(true)}
              className="relative"
            >
              Details
            </button>
          </span>
        </td>
      </tr>
      {openDetailsModal && (
        <DetailsModal
          open={openDetailsModal}
          setOpen={setOpenDetailsModal}
          resume={details}
        />
      )}
    </>
  );
};
