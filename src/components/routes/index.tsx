import React, {useState as PROD, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'reinspect';

import retrieveMaster from '../../api/retrieveMaster';

import Home from '../home';
import Error from '../error';

import masterReducer from '../../reducers/master';
import comparisonReducer from '../../reducers/comparison';

enum LoadStatus {
    LOADING,
    READY
}

const AppContext = React.createContext({
    masterDispatch: (action) => {},
    masterState: {},
    comparisonDispatch: (action) => {},
    comparisonState: {}
});

export default () => {

    const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.LOADING, 'LOADING');      
    const [masterState, masterDispatch] = masterReducer();
    const [comparisonState, comparisonDispatch] = comparisonReducer();

    useEffect(() => {

        retrieveMaster()
            .then((masterData) => {
                setLoadStatus(LoadStatus.READY);
                masterDispatch({type: 'SET', payload: masterData});
            });

    }, masterState)

    switch (loadStatus) {
        case LoadStatus.LOADING:
            return <React.Fragment></React.Fragment>;
        case LoadStatus.READY:
            return <AppContext.Provider 
                    value={{
                        masterDispatch, 
                        masterState, 
                        comparisonDispatch, 
                        comparisonState}}>  
                <Router>
                    <Route path='/' exact component={Home} />
                    <Route path='/error' component={Error} />
                </Router>
            </AppContext.Provider>;
    }
}

export const AppContextConsumer = AppContext;