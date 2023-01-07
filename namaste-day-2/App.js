

/***
 * - What is `Parcel/Webpack`? Why do we need it?
 * 
 * HMR- Hot Module Replcaement
 * File Watcher algorithm - c++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev add Production Build
 * Super Fast build algorithm
 * Image Optimization
 * caching while development
 * Compression
 * Compatable with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1", {

}, "namaste javascript pawan1")
const heading2 = React.createElement("h1", {

}, "namaste javascript pawan2")
const heading3 = React.createElement("h1", {

}, "namaste javascript pawan3")
const container = React.createElement("div", {
    id: "container",

}, [heading1, heading2, heading3])



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)