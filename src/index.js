/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import App from "./App";
render(<App></App>, document.getElementById("app"));

// import * as React from "react";
//import * as ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("app")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );eact.StrictMode>
//);

