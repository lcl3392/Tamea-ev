import { useState } from "react";

export const useCounter = (initialState = 100) => {
    const [state, setState] = useState(initialState)

    const onUp = () => {
        setState(state + 1);
    }
    
    const onDown = () => {
        setState(state - 1);
    }

    const onReset = () => {
        setState(0)
    }

    return {state, onUp, onDown, onReset}
};

export default useCounter;
