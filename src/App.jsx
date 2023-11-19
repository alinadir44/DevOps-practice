// /**
//  * Application component
//  *
//  * To contain application wide settings, routes, state, etc.
//  */
import React from "react";
import { BrowserRouter as Route, Switch, Router } from "react-router-dom";
//import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import Cert from "./Components/Cert";
////import Layout from "./Components/Layout";
import "./styles.css";
/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ali Nadir",
  title: "Cloud practicioner and Web Developer ",
  email: "ali.nadir@studentambassadors.com",
  gitHub: "alinadir44",
  instagram: "kazmi.san",
  linkedIn: "salinadir",
  medium: "edgecake88",
  twitter: "",
  youTube: "",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";
function App() {
  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<Header />}>
    //       {/* <Route path="/" exact name={siteProps.name} title={siteProps.title} element={<Home />} /> */}
    //       <Route index name={siteProps.name} title={siteProps.title} element={<Home />} />
    //       <Route path="projects" element={<Portfolio />}></Route>
    //       <Route path="education" element={<Education />}></Route>
    //     </Route>
    //     <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    //   </Routes>
    // </>
    <div id="Main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <Cert />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>

    // <Router>
    //   <Header />
    //   <Switch>
    //     {/* <Route path="/" exact component={Home} /> */}
    //     <Route path="/" component={Portfolio} />
    //     <Route path="/education" component={Education} />
    //   </Switch>
    //   <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    // </Router>

    // <Router> 
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route exact path="/" element={<Home />}></Route>
    //       <Route exact path="/projects" element={<Portfolio />}></Route>
    //       <Route exact path="/education" element={<Education />}></Route>
    //     </Routes>
    //     <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    //   </div>
    // </Router>
    // <div>
    //   {/* Routes nest inside one another. Nested route paths build upon
    //         parent route paths, and nested route elements render inside
    //         parent route elements. See the note about <Outlet> below. */}
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="projects" element={<Portfolio />} />
    //       <Route path="education" element={<Education />} />
    //     </Route>
    //   </Routes>
    // </div>
  );
}
export default App;
