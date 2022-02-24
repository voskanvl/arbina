import {Button} from '@blueprintjs/core';
import {memo, useCallback} from "react"
import {useDispatch, useSelector} from "react-redux";

export const AddButton = memo((...props) => {
    const value = useSelector(state => state.currentValue);
    const dispatch = useDispatch();
    const habdlerAdd = useCallback(() => {
        dispatch({type: 'ADD', payload: value});
        dispatch({type: 'CURRENT_VALUE', payload: ""});
    }, [dispatch, value]);
    return <Button className="bp3-minimal" icon="plus" onClick={habdlerAdd} {...props} />
})

