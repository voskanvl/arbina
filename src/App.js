import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import { SearchInput } from './components/SearchInput';
import { Table } from './components/Table/';
import { NavigationBar } from './components/NavigationBar';
import { AddButton } from './components/AddButton';

function App() {
    const store = useSelector(state => state.data);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [filtredStore, setFiltredValue] = useState(store);

    const add = () => {
        dispatch({ type: 'ADD', payload: ref.current.value });
        setFiltredValue([ref.current.value, ...store]);
        ref.current.value = '';
    };

    const handlerInput = () => {
        const res = store.filter(e =>
            String(e).includes(ref.current.value.trim()),
        );
        setFiltredValue(res);
    };
    const handlerKeyUp = event => {
        if (event.key === 'Enter') add();
    };

    return (
        <div className="App">
            <NavigationBar>
                <SearchInput
                    ref={ref}
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
