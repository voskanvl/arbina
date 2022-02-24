import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import {useCallback, useState} from 'react';

import { AddButton, SearchInput, Table, NavigationBar } from './components';

function App() {
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
