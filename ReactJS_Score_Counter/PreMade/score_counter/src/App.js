import {useState, useEffect} from "react";

function App() {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    useEffect(() => {
        alert(
            "Here are the rules:\n1. Scores are shown for the 2 players\n2. You can increase any score using respective buttons\n3. First player to reach 5 score wins"
        );
    }, []);

    useEffect(() => {
        if (playerOneScore === 5) {
            alert("Player one wins");
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
        }

        if (playerTwoScore === 5) {
            alert("Player two wins");
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
        }
    }, [playerOneScore, playerTwoScore]);

    return (
        <div className="App" style={{padding: 50}}>
            <div>Player 1 : {playerOneScore}</div>
            <div>Player 2 : {playerTwoScore}</div>
            <div>
                <button
                    onClick={() => {
                        setPlayerOneScore(playerOneScore + 1);
                    }}
                >
                    Player 1 wins
                </button>
                <button
                    onClick={() => {
                        setPlayerTwoScore(playerTwoScore + 1);
                    }}
                >
                    Player 2 wins
                </button>
            </div>
        </div>
    );
}

export default App;
