import {useDispatch} from "react-redux";
import {memo, useCallback} from "react";


export const SearchInput = memo(({ onInput, onKeyUp, ...props }) => {
    const dispatch = useDispatch();
    const handlerInput = useCallback(({ target: { value } }) => {
        dispatch({type: 'CURRENT_VALUE', payload: value})
    },[dispatch])
    return (
    <input
        className="bp3-input"
        placeholder="Text input"
        type="text"
        dir="auto"
        onInput={handlerInput}
        onKeyUp={handlerInput}
        {...props}
    />
);})
