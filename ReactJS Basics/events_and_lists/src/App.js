import logo from "./logo.svg";
import "./App.css";

const fruits = ["Apple", "Banana", "Pear", "Papaya"];

function App() {
    return (
        <div className="App">
            {/* I want to make an event and handle it */}
            {/* I need to know which event I am handling. */}
            {/* I want to call a functin that alerts "hello" whenever this button is clicked */}
            <button
                // To handle events in React, we get inbuilt functionalities that we can use very similar tohow we use attributes in HTML.
                onClick={(e) => {
                    // If we need the event details for any reason, we can get them through a parameter in this function.
                    console.log(e);
                    alert("Hello");
                    // If I wanted to do something else, even if it was complex, I could have written that code here. ANY JS code will work.
                }}
            >
                Say Hello
            </button>

            {/* LISTS ------------------------------------------- */}
            {/* We know we have arrays in JS. Arrays can help us do various things. We want to know how we can use arrays in React to make our job easier. */}
            {/* We don't have any "new" method as such to use arraysin react. We just use the map method generally. */}
            <div>
                {fruits.map((item) => {
                    return (
                        <div onClick={() => {}} key={item}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
