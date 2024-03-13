import { useState } from "react";

export const AddRoleForm = ({ open, setOpen }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const handleFormChange = (event: any) => {};

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Add Role</p>
                <p className="font-normal">Add the job description here</p>
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
              <form>
                <div className="mb-2">
                  <p className="text-lg">Role*</p>
                  <input
                    name="problemNote"
                    id="note"
                    onChange={handleFormChange}
                    className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Eg. Full Stack Developer"
                    autoComplete="off"
                    required
                  ></input>
                  <p className="text-lg mt-6">Job Description*</p>
                  <textarea
                    name="problemNote"
                    id="note"
                    onChange={handleFormChange}
                    className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Eg. Build Flutter Apps"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-row mt-4">
                  <button
                    className="w-full bg-white text-black border border-gray-300 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
