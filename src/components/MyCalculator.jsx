import { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButtonPad from "./MyButtonPad";

function MyCalculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        if (value === "C") {
            setExpression("");
            setResult("");
        } else if (value === "←") {
            setExpression(expression.slice(0, -1));
        } else if (value === "=") {
            try {
                const evalResult = eval(expression.replace(/×/g, "*").replace(/÷/g, "/"));
                setResult(evalResult);
            } catch {
                setResult("錯誤!");
            }
        } else {
            setExpression(expression + value);
        }
    };

    return (
        <>
        <div className="calculator">
            <MyDisplay expression={expression} result={result} />
            <MyButtonPad onButtonClick={handleButtonClick} />
        </div>
        </>
        
    );
}

export default MyCalculator;
