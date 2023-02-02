/*
Parcel Advantages
*HMD Hot Module Reloading
*File watching algorithm -C++
*BUNDLING
*Minify
*Cleaning your code
*Dev and production build
*Super fast building algorithm
*Image optimization
*Cache while developing
*Compression
*Compatible with older version of browser
*HTTPS on dev
*port number
*Consistent Hashing algorithm
* zero config 
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "hello" }, "Hello World");
const heading2 = React.createElement(
  "h2",
  { id: "namaste" },
  "Hello Namaste React !"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
