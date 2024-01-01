import logo from "./logo.svg";
import {useOnlineStatus} from "./hooks/useOnlineStatus";

function App() {
    const isOnline = useOnlineStatus();

    return <div className="App">Hi {isOnline ? "Online" : "Offline"}</div>;
}

export default App;
