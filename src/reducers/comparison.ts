import {useReducer as PROD} from 'react';
import { useReducer } from 'reinspect';

export const initialState = [];

export function reducer(state, action) {
    switch (action.type) {
        case 'SET':
            return [...action.payload];
        case 'GET':
            return [...state];
        default:
            return [...state];
    }
}

export default () => useReducer(reducer, initialState, 'COMPARISON')