import { useCallback, useState } from "react"

export const useInput = (initalState={}) => {
    const [state, setState] = useState(initalState);

    const changeInput = useCallback(e => {
        const {value, name} = e.target;
        setState({...state, [name]: value});
    }, [state]);

    return {state, changeInput}
}
