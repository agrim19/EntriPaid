import {useState, useEffect} from "react";

const PlayArea = ({incrementWinner}) => {
    const [playerChoice, setPlayerChoice] = useState();
    const [computerChoice, setComputerChoice] = useState();

    useEffect(() => {
        if (!playerChoice || !playerChoice.length) {
            return;
        }
        const options = ["Rock", "Paper", "Scissors"];
        const index = Math.floor(Math.random() * 3);
        const choice = options[index];
        setComputerChoice(choice);
        switch (playerChoice) {
            case "Rock":
                if (choice == "Paper") {
                    incrementWinner("computer");
                    alert("Computer wins :(");
                } else if (choice == "Scissors") {
                    incrementWinner("player");
                    alert("You win! :)");
                } else {
                    alert("Draw.");
                }
                break;
            case "Paper":
                if (choice == "Paper") {
                    alert("Draw.");
                } else if (choice == "Scissors") {
                    incrementWinner("computer");
                    alert("Computer wins :(");
                } else {
                    incrementWinner("player");
                    alert("You win! :)");
                }
                break;
            case "Scissors":
                if (choice == "Paper") {
                    incrementWinner("player");
                    alert("You win! :)");
                } else if (choice == "Scissors") {
                    alert("Draw.");
                } else {
                    incrementWinner("computer");
                    alert("Computer wins :(");
                }
                break;
            default:
                return;
        }
        setPlayerChoice();
    }, [playerChoice]);

    return (
        <div className="w-1/2 h-full">
            <div className="h-1/2 flex items-center justify-center">
                {computerChoice || "Computer is waiting..."}
            </div>
            <hr />
            <div className="h-1/2 text-center p-2">
                <div>Choose your play</div>
                <div className="flex pt-4 justify-around">
                    <PlayOption
                        value={"Rock"}
                        setPlayerChoice={setPlayerChoice}
                    />
                    <PlayOption
                        value={"Paper"}
                        setPlayerChoice={setPlayerChoice}
                    />
                    <PlayOption
                        value={"Scissors"}
                        setPlayerChoice={setPlayerChoice}
                    />
                </div>
            </div>
        </div>
    );
};

const PlayOption = ({value, setPlayerChoice}) => {
    return (
        <div
            className="bg-gradient-to-r from-sky-500 to-indigo-500 p-3 rounded-md cursor-pointer"
            onClick={() => {
                setPlayerChoice(value);
            }}
        >
            {value}
        </div>
    );
};

export default PlayArea;
