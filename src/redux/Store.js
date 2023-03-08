import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer';
import { loadState, saveState } from './Helper';
import { throttle } from "lodash";

const persistedState = loadState();

export const store = configureStore({
    reducer: reducer,
    preloadedState: persistedState,
});

store.subscribe(throttle (() => {
    saveState({
        history: store.getState().history
    });
}, 1000));

export default store;