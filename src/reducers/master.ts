import {useReducer as PROD} from 'react';
import { useReducer } from 'reinspect';

const initialState = {};

export function reducer(state, action) {
    switch (action.type) {
        case 'SET':
            return {...action.payload};
            break;
        case 'GET':
            return {...state};
            break;
        default:
            return {...state};
    }
}

export default () => useReducer(reducer, initialState, 'MASTER');
