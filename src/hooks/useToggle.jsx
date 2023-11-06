import { useState } from "react"

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)

    const onToggle = x => {
        setState(y => typeof(x) === 'boolean' ? x : !y);
    }
    const onChk = x => {
        setState(x)
    }

    return {state, onToggle, onChk}
}