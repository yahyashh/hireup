import { Route, Routes } from "react-router-dom";
import Job from "./components/SingelPage/Job";
import Main from "./Main";
import SpecificCompany from "./components/SingelPage/SpecificCompany";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/job" element={<Job/>}/>
      <Route path="/company" element={<SpecificCompany/>}/>
    </Routes>
    
    </>
  );
}

export default App;
