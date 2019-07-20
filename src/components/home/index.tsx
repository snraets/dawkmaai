import React, {useContext} from 'react';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {AppContextConsumer} from '../routes'
import GetFile from './getFile';

export default () => {

    const value = useContext(AppContextConsumer);

    return <div>
        <h1>I am home</h1>
        <GetFile />
    </div>
}