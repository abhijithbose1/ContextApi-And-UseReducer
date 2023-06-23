import React, { useContext } from "react";
import { useState } from "react";
import { CounterContext } from "../../context/CounterContext";
import "./Counter.css";

export const Counter = () => {
    
    const {count, onDecrement, onIncrement , onReset , onIncrementBy , onDecrementBy} = useContext(CounterContext);

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
