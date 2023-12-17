import {useState} from "react";

function App() {
    const [value, setValue] = useState("");

    return (
        <div className="App">
            <input
                type="text"
                // onChange is the event handler that gets the value of the event of the input value changing.
                // Let's say the event is e, then e.target.value will store the value inside the input.
                onChange={(e) => {
                    console.log(e.target.value);
                    setValue(e.target.value);
                }}
                value={value}
            />
            <button
                onClick={() => {
                    alert(value);
                }}
            >
                Click me
            </button>
        </div>
    );
}

export default App;
