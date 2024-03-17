import { CandidateTableRow } from "./CandidateRow";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CandidatesTable = ({ resumeObjects }: any) => {
  const navigate = useNavigate();
  console.log(resumeObjects);

  useEffect(() => {
    if (!Array.isArray(resumeObjects) && resumeObjects.length === 0) {
      navigate("/");
    }
  }, [resumeObjects, navigate]);

  return (
    <>
      <div className="container px-4 sm:px-8">
        <div className="py-8">
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0"></div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Relevance Score
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Resume Link
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(resumeObjects) &&
                    resumeObjects.map((resume: any, index: number) => {
                      const fullName = resume["resume_object"]["name"];
                      const nameParts = fullName.split(" ");

                      // Extract the initials of the first and last names
                      const firstNameInitial = nameParts[0]
                        .charAt(0)
                        .toUpperCase();
                      const lastNameInitial = nameParts[nameParts.length - 1]
                        .charAt(0)
                        .toUpperCase();

                      // Concatenate the initials
                      const initials = `${firstNameInitial}${lastNameInitial}`;
                      return (
                        <CandidateTableRow
                          key={index}
                          initials={initials} // Update with actual image URL
                          name={fullName}
                          relevancy_score={
                            resume["resume_object"]["overall_relevancy_score"]
                          } // Assuming relevancy_score is in projects array's first item
                          resume_link={resume.download_url} // Update with actual resume link
                          details={resume} // Update with actual details
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
