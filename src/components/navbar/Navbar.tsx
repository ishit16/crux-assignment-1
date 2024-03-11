import cruxLogo from "../../assets/crux-logo.jpg";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="py-2 px-16">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <img src={cruxLogo} className="w-10 h-10 rounded-xl"></img>
            <p className="text-5xl text-center mb-4 px-2 font-bold text-indigo-500">
              crux
            </p>
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-gray-600 font-bold bg-gray-200 rounded-full">
            IG
          </div>
        </div>
      </div>
    </nav>
  );
};
