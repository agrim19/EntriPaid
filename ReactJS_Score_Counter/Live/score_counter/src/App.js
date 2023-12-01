import {useState, useEffect} from "react";

function App() {
    // useState
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    // If I make a useEffect which ONLY runs on the first render, we can put this alert inside that useEffect.
    useEffect(() => {
        alert(
            "Here are the rules:\n1. Scores are shown for the first 2 players.\n2. You can increase any score using respective buttons.\n3. First player to reach 5 score wins."
        );
    }, []);

    // 1. We need to keep track of the scores.
    // 2. We need to check the max score condition EVERY time ANY of the 2 scores changes.

    useEffect(() => {
        if (playerOneScore === 5) {
            alert("player one wins");
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
        }
        if (playerTwoScore === 5) {
            alert("player two wins");
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
        }
    }, [playerOneScore, playerTwoScore]);

    return (
        <div className="App" style={{padding: 50}}>
            <div>Player 1 : {playerOneScore}</div>
            <div>Player 2 : {playerTwoScore}</div>
            <div>
                {/* We want that when this button is clicked, player 1 score increases by one. */}
                <button
                    onClick={() => {
                        // increment playerOneScore by 1;
                        setPlayerOneScore(playerOneScore + 1);
                    }}
                >
                    Player 1 wins
                </button>
                <button
                    onClick={() => {
                        // increment playerTwoScore by 1;
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
