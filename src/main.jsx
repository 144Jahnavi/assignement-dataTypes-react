import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./App"; // or "./Counter" if you renamed it

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);