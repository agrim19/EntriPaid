import {useEffect, useState} from "react";
import "./App.css";

function App() {
    // We know hooks are used to use React functionalities inside our component.
    // The hook we are going to learn first is used to manage(create) a state.
    // The hook is called "useState"

    // Hooks do NOT have a special syntax that we need to keep in mind. They can be called just like ANY normal JS function.
    // Different hooks take different number and type of arguments.
    // AND every hook returns a different result.

    // For example, useState takes either 1 or 0 parameters. (it is considered 1). This parameter is the initial value of the state
    // And useState returns 2 results in the form of an array : the first is the actual state, the second is a function to modify the value of the state.
    const [value, setValue] = useState("initialValue");
    // By doing this, we have created a state with initialValue called value and a setter method called setValue;

    // Another hook example:
    // useEffect
    // useEffect is called whenever the component initially mounts AND every time the component refreshes (for whatever reason, eg : state update). However, we CAN customise when a useEffect is triggered.
    // We can put ANY function we want inside useEffect
    // It takes 1 or optionally 2 arguments and we do not generally take any return from it.
    // USE CASE : IF I want to run any operation on component mounting or state update. For example : fetching data from db.
    // The first argument is the actual function we want to run every time it is triggered.
    // The second argument is the dependency array. This is what is used to customise when the hook is triggered.
    // Empty dependency array : It will NOT trigger useEffect on ANY state change
    // Consider I have 2 states : value1 and value2. If I want my useEffect to trigger when value1 is changed and not trigger when value2 is changed, I can use dependency array [value1]
    useEffect(() => {
        // alert("hi");
    }, []);

    return (
        <div className="App">
            <h1>Hooks</h1>
        </div>
    );
}

export default App;
