import React, {useContext} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {AppContextConsumer} from '../routes'

export default () => {

    const value = useContext(AppContextConsumer);

    return <div>
        <h1>I am home</h1>
    </div>
}