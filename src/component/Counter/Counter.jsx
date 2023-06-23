import React from "react";
import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onDecrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };
    const onIncrement = () => {
        if (count <= 99) {
            setCount((prev) => prev + 1);
        }
    };
    const onReset = () => {
        setCount(0);
    };
    const onIncrementBy = (value) => {
        if (count <= 90) {
            setCount((prev) => prev + value);
        }
    };
    const onDecrementBy = (value) => {
        if (count >= 5) {
            setCount((prev) => prev - value);
        }
    };

    return (
        <div className="counter-container">
            <div className="loading-container">
                <p> {count}</p>
                <div
                    className="loading"
                    style={{
                        height: 3 * count,
                        background:
                            count < 60
                                ? "green"
                                : count >= 60 && count <= 75
                                ? "rgb(255, 162, 0)"
                                : count > 75 && count < 90
                                ? "orangered"
                                : "red",
                    }}
                ></div>
            </div>
            <div className="buttons">
                <button onClick={() => onDecrementBy(5)}>Decrement By 5</button>
                <button onClick={onDecrement} style={{ fontSize: "25px" }}>
                    -
                </button>
                <button onClick={onReset} style={{ background: "rgb(226, 36, 36)" , fontSize:"14px"}}>
                    Reset
                </button>
                <button onClick={onIncrement} style={{ fontSize: "25px" }}>
                    +
                </button>
                <button onClick={() => onIncrementBy(10)}>Increment By 10</button>
            </div>
        </div>
    );
};
