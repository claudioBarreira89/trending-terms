import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import * as serviceWorker from "./client/serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
