import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyComponent from "./components/MyComponent";

function App() {
    // I am making 2 routes,
    // 1. / shows the home page
    // 2. /sayMessage/ANYTHING I want to go to the MyComponent component and display the message.

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/sayMessage/:message"
                        element={<MyComponent />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const Home = () => {
    return <div>Home</div>;
};

export default App;
