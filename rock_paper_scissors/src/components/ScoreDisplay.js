const ScoreDisplay = ({playerName, score}) => {
    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-center ">
            <div className="font-semibold text-lg">{playerName}'s Score</div>
            <div className="font-light">{score}</div>
        </div>
    );
};

export default ScoreDisplay;
