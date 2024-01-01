import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            {/* I want to render my Hello component that just returns hello*/}
            <Hello prop="value" name="Agrim" city="Blr" />
        </div>
    );
}

export default App;
