import { useState } from "react"
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        const intervalId = setInterval(() => {
            setCount((count) => {
                if (count >= 100) {
                    clearInterval(intervalId); // Stop the interval
                    return count; // Keep the count at 100
                }
                return count + 1;
            });
        }, 98);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0);
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <div className="btns">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <button id="resetBtn" onClick={handleReset}>Reset</button>
        </div>
    )
}