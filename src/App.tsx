import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HomePage } from "./pages/Home";
import { FilteredCandidates } from "./pages/FilteredCandidates";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/filtered-candidates"
            element={<FilteredCandidates />}
          ></Route>
        </Routes>
        <Toaster />
      </Router>
    </RecoilRoot>
  );
}

export default App;
