import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HomePage } from "./pages/Home";
import { FilteredCandidates } from "./pages/FilteredCandidates";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/f" element={<HomePage />}></Route>
          <Route path="/" element={<FilteredCandidates />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
