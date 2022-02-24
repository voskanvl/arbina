import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";


export const SearchInput = memo(({onInput, onKeyUp, ...props}) => {
    const dispatch = useDispatch();
    const currentValue = useSelector(state => state.currentValue)
    const handlerInput = useCallback(({target: {value}}) => {
        dispatch({type: 'CURRENT_VALUE', payload: value})
    }, [dispatch])
    const handlerAdd = useCallback(({key}) => {
        if (key === "Enter") {
            dispatch({type: 'ADD', payload: currentValue});
            dispatch({type: 'CURRENT_VALUE', payload: ""})
        }
    }, [dispatch, currentValue])
    return (
        <input
            value={currentValue}
            className="bp3-input"
            placeholder="Text input"
            type="text"
            dir="auto"
            onInput={handlerInput}
            onKeyUp={handlerAdd}
            {...props}
        />
    );
})
