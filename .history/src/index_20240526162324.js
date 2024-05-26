import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

function Pizza() {
  return <div></div><h2>Pizza</h2>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // or root.render<App />);

//React before v18
// React.render(<App />, document.getElementById("root"));
