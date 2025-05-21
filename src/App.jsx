import MyCalculator from "./components/MyCalculator";
import "./App.css";

function App() {
    return (
        <div className="app-wrapper">
            <h1 className="title">計算機</h1>
            <div className="center-area">
                <MyCalculator />
            </div>
        </div>
    );
}

export default App;
