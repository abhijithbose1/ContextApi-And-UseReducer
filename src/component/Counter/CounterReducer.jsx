export const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            if (state.count < 100) {
                const newCount = state.count + 1;
                return {
                    count: newCount,
                };
            }
            return state;
        case "decrement":
            if (state.count > 0) {
                const newCount = state.count - 1;
                return {
                    count: newCount,
                };
            }
            return state;
        case "reset":
            return {
                count: 0,
            };
        case "incrementBy":
            if (state.count <= 100 - action.value) {
                return {
                    count: state.count + action.value,
                };
            }
            return state;
        case "decrementBy":
            if (state.count >= 0 + action.value) {
                return {
                    count: state.count - action.value,
                };
            }
            return state;
        default:
            return state;
    }
};
