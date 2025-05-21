import MyButton from "./MyButton";

function MyButtonPad({ onButtonClick }) {
    const buttons = [
        "7", "8", "9", "÷",
        "4", "5", "6", "×",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "C", "←"
    ];

    return (
        <div className="button-pad">
            {buttons.map((btn) => (
                <MyButton key={btn} label={btn} onClick={() => onButtonClick(btn)} />
            ))}
        </div>
    );
}

export default MyButtonPad;
