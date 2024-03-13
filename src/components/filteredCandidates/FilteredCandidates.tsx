import ParentContainer from "../../hoc/Layout";
import { CandidatesTable } from "./CandidatesTable";

export const FilteredCandidatesContainer = () => {
  return (
    <ParentContainer>
      <div className="flex flex-col px-12">
        <span className="font-semibold text-3xl">4 Resumes Filtered</span>
        <span className="text-normal text-gray-700">Purpose Selection</span>
        <div className="border-t mt-8 border-gray-300"></div>
      </div>
      <div className="flex flex-col md:flex-row md:px-24  justify-between items-center md:items-start mt-8">
        <span className="text-gray-700 font-bold text-xl md:py-16 mb-4 md:mb-0">
          Recommended Profiles
        </span>
        <div>
          <CandidatesTable />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-24  justify-between items-center md:items-start mt-8">
        <span className="text-gray-700 font-bold text-xl md:py-16 mb-4 md:mb-0">
          Recommended Profiles
        </span>
        <div>
          <CandidatesTable />
        </div>
      </div>
    </ParentContainer>
  );
};
