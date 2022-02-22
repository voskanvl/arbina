import { Provider } from 'react-redux';
import { createStore } from 'redux';

export const reducer = (state = [], action) => {
    const switchMap = {
        ADD: payload => ({ ...state, data: [payload, ...state.data] }),
    };
    if (typeof state === 'undefined') {
        return 0;
    }

    if (action.type in switchMap) return switchMap[action.type](action.payload);
    return state;
};

export const store = createStore(
    reducer,
    {
        data: [
            'I had thought thou hadst a Roman; for the oracle',
            'Thus by All bids the man against the word',
            'Which are so weak of care, by old care done',
            'Your children were in your holy love',
            'And the precipitation through the bleeding throne.',
        ],
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const StoreProvider = ({ children, ...props }) => (
    <Provider store={store} {...props}>
        {children}
    </Provider>
);
