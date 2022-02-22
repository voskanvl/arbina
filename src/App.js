import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { AddButton, SearchInput, Table, NavigationBar } from './components';

function App() {
    const store = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [filtredStore, setFiltredValue] = useState(store);
    const [value, setValue] = useState('');

    const add = () => {
        dispatch({ type: 'ADD', payload: value });
        setFiltredValue([value, ...store]);
        setValue('');
    };

    const handlerInput = ({ target: { value } }) => {
        const res = store.filter(e => String(e).includes(value.trim()));
        setFiltredValue(res);
        setValue(value);
    };
    const handlerKeyUp = event => {
        if (event.key === 'Enter') add();
    };

    return (
        <div className="App">
            <NavigationBar>
                <SearchInput
                    value={value}
                    onInput={handlerInput}
                    onKeyUp={handlerKeyUp}
                />
                <AddButton onClick={add} />
            </NavigationBar>
            <Table Rows={filtredStore} />
        </div>
    );
}

export default App;
