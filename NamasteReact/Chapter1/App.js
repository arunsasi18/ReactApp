const heading = React.createElement("h1", { class: "hello" }, "Hello World");
const heading2 = React.createElement(
  "h2",
  { class: "namaste" },
  "Hello Namaste React !"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
