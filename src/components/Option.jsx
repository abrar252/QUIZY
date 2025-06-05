const Option = ({ data, answer, selectedOption, setSelectedOption }) => {
  return (
    <button
      className={`option ${
        selectedOption &&
        (data === answer
          ? "correct"
          : data === selectedOption
          ? "incorrect"
          : "")
      }`}
      onClick={() => setSelectedOption(data)}
      disabled={!!selectedOption}
    >
      {data}
    </button>
  );
};

export default Option;
