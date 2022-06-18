import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/**
 * Recap
 * - We import react-router-dom; a collection of components
 * - Router component - render router first, 
 * whatever put inside what we are able to show to the user'depending on url where they are'
 * React router allows us the 'dynamic url' = can put a :variable e.g. 3000/movie/:id
 * how we can know what is the id ?
 */