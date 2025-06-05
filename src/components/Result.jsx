const Result = ({score, setScore, setQuizStage}) => {

    const onRestart= () =>{
        setScore(0)
        setQuizStage('IN_PROGRESS')
    }

    return (
        <div className="result-screen">
            <div className="score">
                Your Score: {score}
            </div>
            <button id="restart" onClick={onRestart}>Restart</button>
        </div>
    )
}

export default Result