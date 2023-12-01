import {useState} from "react";
import "./App.css";

function App() {
    // To create a state, we need to use the useState hook in react.
    const [myFirstState, setMyFirstState] = useState("hello");
    console.log(myFirstState);
    return (
        <div className="App">
            <div>I am a value</div>
            {/* My final aim isthat when I click this button i wupdate state value */}
            <button
                onClick={() => {
                    setMyFirstState("hiii");
                }}
            >
                Click Me
            </button>
        </div>
    );
}

export default App;
