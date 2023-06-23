import React, { useReducer } from "react";
// import { useState } from "react";
import "./Counter.css";
import { counterReducer } from "./CounterReducer";

export const Counter = () => {
   
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    });

    return (
        <div className="counter-container">
            <div className="loading-container">
                <p> {state.count}</p>
                <div
                    className="loading"
                    style={{
                        height: 3 * state.count,
                        background:
                            state.count < 60
                                ? "green"
                                : state.count >= 60 && state.count <= 75
                                ? "rgb(255, 162, 0)"
                                : state.count > 75 && state.count < 90
                                ? "orangered"
                                : "red",
                    }}
                ></div>
            </div>
            <div className="buttons">
                <button onClick={() => dispatch({ type: "decrementBy", value: 5 })}>Decrement By 5</button>
                <button onClick={() => dispatch({ type: "decrement" })} style={{ fontSize: "25px" }}>
                    -
                </button>
                <button
                    onClick={() => dispatch({ type: "reset" })}
                    style={{ background: "rgb(226, 36, 36)", fontSize: "14px" }}
                >
                    Reset
                </button>
                <button onClick={() => dispatch({ type: "increment" })} style={{ fontSize: "25px" }}>
                    +
                </button>
                <button onClick={() => dispatch({ type: "incrementBy", value: 10 })}>Increment By 10</button>
            </div>
        </div>
    );
};
