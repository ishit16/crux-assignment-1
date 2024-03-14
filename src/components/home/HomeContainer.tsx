import ParentContainer from "../../hoc/Layout";
import { FileUpload } from "../fileupload/FileUpload";

export const HomeContainer = () => {
  return (
    <ParentContainer>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <FileUpload />
        </div>
        {/* <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg py-2 w-24 mx-auto rounded-md mt-4">
          Add Role
        </button> */}
      </div>
    </ParentContainer>
  );
};
