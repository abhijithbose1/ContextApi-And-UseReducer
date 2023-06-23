import { Children, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children})=>{

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

    return <CounterContext.Provider value={{count, onDecrement, onIncrement , onReset , onIncrementBy , onDecrementBy}}>{children}</CounterContext.Provider>
}