import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

