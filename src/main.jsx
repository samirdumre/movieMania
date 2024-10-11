import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import './index.css'
import App from "./App";
// import StarRating from "./StarRating.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
        {/*<StarRating maxRating={10}/>*/}
    </StrictMode>
);
