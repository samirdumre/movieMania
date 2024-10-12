import {StrictMode, useState} from "react";
import {createRoot} from "react-dom/client";
import './index.css'
import App from "./App";
import StarRating from "./StarRating.jsx";

function Test() {
    const [movieRating, setMovieRating] = useState(0);

    return(
        <div>
            <StarRating color={"blue"} maxRating={10} onSetRating={setMovieRating} />
            <p>This movie is rated {movieRating} stars</p>
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
        {/*<StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} defaultRating={3} />*/}
        {/*<Test />*/}
    </StrictMode>
);
