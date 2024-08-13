import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeDarkWeb from "./pages/HomeDarkWeb";
import ProjectSection from "./pages/ProjectSection";
import About from "./pages/About";
import TechStack from "./pages/TechStack";

function App() {


  
  return (
    <Routes>
      <Route path="/" element={<HomeDarkWeb />} />
      <Route path="/projects" element={<ProjectSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/techstack" element={<TechStack />} />
    </Routes>
  );
}
export default App;
