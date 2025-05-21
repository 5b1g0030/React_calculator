function MyDisplay({ expression, result }) {
    return (
        <div className="display">
            <div className="expression">{expression}</div>
            <div className="result">{result !== "" ? `= ${result}` : ""}</div>
        </div>
    );
}

export default MyDisplay;
