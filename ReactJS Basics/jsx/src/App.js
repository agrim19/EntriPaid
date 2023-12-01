import logo from "./logo.svg";
import "./App.css";

function App() {
    let x = 2;
    const ar = ["hi", "hello", "bye"];
    return (
        <div className="App">
            <h1>Heading</h1>
            <p>I am a paragraph</p>
            {/* Whenever we want to write JSX, we put that block of code in curly braces {} */}
            {x}

            {ar.map((item) => {
                return item;
            })}
            <br />
            {
                // I want to write a code that prints "even" if the value of x is even and "odd" if the value of x is odd.
                x % 2 == 0 ? "x is even" : "x is odd"
            }
        </div>
    );
}
export default App;
