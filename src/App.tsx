import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AslClassifier from "./pages/AslClassifier";
import BrainBlast from "./pages/BrainBlast";
import Generic from "./pages/Generic";
// import Elements from "./pages/Elements";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/asl-classifier" element={<AslClassifier />} />
        <Route path="/projects/brain-blast" element={<BrainBlast />} />
        <Route path="/generic" element={<Generic />} />
        {/* <Route path="/elements" element={<Elements />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
