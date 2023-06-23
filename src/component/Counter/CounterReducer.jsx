export const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            if (state.count < 100) {
                const newCount = state.count + 1;
                return {
                    count: newCount,
                };
            }
        case "decrement":
            if (state.count > 0) {
                const newCount = state.count - 1;
                return {
                    count: newCount,
                };
            }
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
        case "decrementBy":
            if (state.count >= 0 + action.value) {
                return {
                    count: state.count - action.value,
                };
            }

        default:
            return state;
    }
};
