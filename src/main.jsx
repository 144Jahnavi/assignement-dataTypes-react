import React from "react";
import ReactDOM from "react-dom/client";
import Student from "./App.jsx"; // ✅ Import default export

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Student />
    </React.StrictMode>
);
