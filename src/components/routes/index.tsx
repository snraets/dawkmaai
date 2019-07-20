import React, {useState as PROD, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'reinspect';

import retrieveMaster from '../../api/retrieveMaster';

import Home from '../home';
import Error from '../error';

import masterReducer from '../../reducers/master';

enum LoadStatus {
    LOADING,
    READY
}

const AppContext = React.createContext({
    masterDispatch: (action) => {},
    masterState: {}
});

export default () => {

    const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.LOADING, 'LOADING');      
    const [masterState, masterDispatch] = masterReducer();

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
                    value={{masterDispatch, masterState}}>  
                <Router>
                    <Route path='/' exact component={Home} />
                    <Route path='/error' component={Error} />
                </Router>
            </AppContext.Provider>;
    }
}

export const AppContextConsumer = AppContext;