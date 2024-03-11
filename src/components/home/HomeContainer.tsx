import ParentContainer from "../../hoc/Layout";
import { FileUpload } from "../fileupload/FileUpload";

export const HomeContainer = () => {
  return (
    <ParentContainer>
      <div className="flex flex-row justify-center">
        <FileUpload />
      </div>
    </ParentContainer>
  );
};
