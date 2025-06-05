const Start = ({ setQuizStage }) => {
    return (
        <div className="start-screen">
            <h1>Ready for a Quiz?</h1>
            <button id="start" onClick={()=> setQuizStage('IN_PROGRESS')}>Start</button>
        </div>
    )
}

export default Start