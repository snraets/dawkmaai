import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import retrieveMaster from '../../api/retrieveMaster';

import Home from '../home';
import Error from '../error';

enum LoadStatus {
    LOADING,
    READY
}

export default () => {

    const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.LOADING);    

    debugger;

    retrieveMaster()
        .then(() => setLoadStatus(LoadStatus.READY));

    switch (loadStatus) {
        case LoadStatus.LOADING:
            return <React.Fragment></React.Fragment>;
        case LoadStatus.READY:
            return <Router>
                <Route path="/" exact component={Home} />
                <Route path="/error" component={Error} />
            </Router>;
    }
}