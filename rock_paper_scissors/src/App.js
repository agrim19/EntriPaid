import {useState} from "react";
import PlayArea from "./components/PlayArea";
import ScoreDisplay from "./components/ScoreDisplay";

function App() {
    const [computerCount, setComputerCount] = useState(0);
    const [playerCount, setPlayerCount] = useState(0);

    const incrementWinner = (winner) => {
        switch (winner) {
            case "computer":
                setComputerCount(playerCount + 1);
                break;
            case "player":
                setPlayerCount(playerCount + 1);
                break;
            default:
                return;
        }
    };

    return (
        <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 w-screen h-screen text-white">
            <ScoreDisplay playerName={"Agrim"} score={playerCount} />
            <PlayArea incrementWinner={incrementWinner} />
            <ScoreDisplay playerName={"Computer"} score={computerCount} />
        </div>
    );
}

export default App;
