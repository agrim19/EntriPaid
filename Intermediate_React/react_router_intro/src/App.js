// Step 1 : Install react-router-dom using npm
// Step 2 : Import react-router-dom in app.js

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

function App() {
    // The routes need to take 3 levels:
    // 1. BrowserRouter : The container for the whole route logic. All other route related tags need to come INSIDE BrowserRouter.
    // 2. Routes : This is the container tag for the actual routes.
    // 3. Route : This is the tag that actually defines a route. We add 1 Route tag for each router we need in our application.
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/one" element={<ComponentOne />} />
                <Route path="/two" element={<ComponentTwo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
