import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import {useCallback, useState} from 'react';

import { AddButton, SearchInput, Table, NavigationBar } from './components';

function App() {
    // const store = useSelector(state => state.data);
    // const dispatch = useDispatch();
    // const [filtredStore, setFiltredValue] = useState(store);
    // const [value, setValue] = useState('');

    // const add = () => {
    //     dispatch({ type: 'ADD', payload: value });
    //     setFiltredValue([value, ...store]);
    //     setValue('');
    // };


    // const handlerKeyUp = event => {
    //     if (event.key === 'Enter') add();
    // };

    return (
        <div className="App">
            <NavigationBar>
                <SearchInput />
                <AddButton />
            </NavigationBar>
            <Table />
        </div>
    );
}

export default App;
