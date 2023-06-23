import React, { useReducer } from "react";
// import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const counterReducer = (state, action) => {
        switch (action.type) {
            case "decrement":
                if (state.count > 0) {
                    const newcount = state.count - 1;
                    return {
                        count: newcount,
                    };
                } else {
                    return {
                        count: state.count,
                    };
                }

            case "increment":
                if (state.count <= 99) {
                    const newCount = state.count + 1;
                    return {
                        count: newCount,
                    };
                } else {
                    return {
                        count: state.count,
                    };
                }

            case "incrementBy":
                if (state.count <= 90) {
                    const newCount = state.count + action.value;
                    return {
                        count: newCount,
                    };
                } else {
                    return {
                        count: state.count,
                    };
                }

            case "reset":
                return {
                    count: 0,
                };

            case "decrementBy":
                if (state.count >= 5) {
                    const newCount = state.count - action.value;
                    return {
                        count: newCount,
                    };
                } else {
                    return {
                        count: state.count,
                    };
                }

            default:
                return state;
        }
    };

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
