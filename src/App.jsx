// /**
//  * Application component
//  *
//  * To contain application wide settings, routes, state, etc.
//  */

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// //import About from "./Components/About";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import About from "./Components/About"
// import Home from "./Components/Home";
// import Portfolio from "./Components/Portfolio";
// import Education from "./Components/Education";

// import "./styles.css";

// /**
//  * This object represents your information. The project is set so that you
//  * only need to update these here, and values are passed a properties to the
//  * components that need that information.
//  *
//  * Update the values below with your information.
//  *
//  * If you don't have one of the social sites listed, leave it as an empty string.
//  */
// const siteProps = {
//   name: "Ali Nadir",
//   title: "Cloud practicioner and Web Developer ",
//   email: "ali.nadir@studentambassadors.com",
//   gitHub: "alinadir44",
//   instagram: "kazmi.san",
//   linkedIn: "salinadir",
//   medium: "edgecake88",
//   twitter: "",
//   youTube: "",
// };

// const primaryColor = "#4E567E";
// const secondaryColor = "#D2F1E4";

// function App() {
//   return (
//     // <Router>
//     //   <Header />
//     //   <Switch>
//     //     <Route path="/" exact name={siteProps.name} title={siteProps.title} component={Home} />
//     //     <Route path="/projects" component={Portfolio}></Route>
//     //     <Route path="/education" component={Education}></Route>
//     //   </Switch>
//     //   <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
//     //  </Router>
//     <div id="main">
//       <Header />
//       <Home name={siteProps.name} title={siteProps.title} />
//       <About />
//       <Portfolio />
//       <Education />
//       <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Sheeps from "./Components/Sheeps";
import Goats from "./Components/Goats";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projects" element={Goats} />
        <Route path="/education" element={Sheeps} />
      </Routes>
    </Router>
  );
}

export default App;
