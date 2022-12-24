// javascript way

// const heading = document.createElement("h1")
// heading.innerHTML = "namaste javascript root"

// const root = document.getElementById("root")
// root.appendChild(heading)
// console.log(heading, root)

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