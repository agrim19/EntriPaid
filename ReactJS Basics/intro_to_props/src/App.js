import logo from "./logo.svg";
import "./App.css";
import CheckComponent from "./components/CheckComponent";

function App() {
    const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const doSomething = () => {
        alert("hi");
    };

    return (
        <div className="App">
            <h3>There are {ar.length} items in the array</h3>
            <CheckComponent xyz={ar} doSomething={doSomething} />
        </div>
    );
}

export default App;
