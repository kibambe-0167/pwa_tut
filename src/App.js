import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// 
const About = lazy(() => import('./about'));
const Home = lazy(() => import('./home'));

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/about"  element={<About />} />
        <Route path="/"  element={<Home />} />
      </Routes>

      {/* render this, while waiting for components to load. */}
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
    </Router>
  )
};
export default App;




// <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//     </nav>