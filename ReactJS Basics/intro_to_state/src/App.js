// Steps to use state:
// 1. A state is defined using a useState hook(function) which declares it.
// 2. useState hook is not present in our file by default. Hence, we need to import it.
import {useState} from "react";

function App() {
    let x = 3;
    // Currently we are logging x to the console. That is okay, but we MAY also be showing the value of x on screen. We can clearly see that just a plain variable DOES NOT re render the component when teh value is changed.
    console.log("Variable log is : ", x);

    // To Do THAT, we can use state. Let's replicate the same functionality with a state called counter.
    // useState hook takes 1 parameter. That is the initial value of the state. We can also pass 0 parameters. In that case, teh state is initialised to null.
    // useState returns an array of 2 elements. The first element is teh state itself. The second is a setter function for the state.
    // This setter function can be called with the desired new value of the state to update the value.
    const [counter, setCounter] = useState(3);

    console.log("State log is : ", counter);

    return (
        <div className="App">
            <h1>I am state example</h1>
            {/* We are adding syntax so that on the click of this button, the value of x goes up by 1. */}
            <button
                onClick={() => {
                    x++;
                    console.log("From onclick variable is " + x);
                    // counter = counter + 1
                    setCounter(counter + 1);
                    console.log("From onclick state is changed ");
                }}
            >
                Click me to increment x
            </button>
        </div>
    );
}

export default App;
