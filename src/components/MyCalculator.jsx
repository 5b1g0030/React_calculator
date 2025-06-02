import { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButtonPad from "./MyButtonPad";

function MyCalculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        // 如果按下'C'，清空所有文字
        if (value === "C") {
            setExpression("");
            setResult("");
        } 
        // 如果按下'←'，刪除最尾端的字元
        else if (value === "←") { 
            setExpression(expression.slice(0, -1)); // 回傳第0個~倒數第1個字元(不包含)
        }
        // 如果按下'='，開始計算輸入的算式
        else if (value === "=") {
            try {
                // 符號轉換: x->* , ÷->/
                const evalResult = eval(expression.replace(/×/g, "*").replace(/÷/g, "/"));
                setResult(evalResult); // 儲存運算結果
            } catch {
                setResult("錯誤!");
            }
        }
        // 如果按下的按紐不是以上幾種，一律加在原字串後面
        else {
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
