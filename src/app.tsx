import * as React from 'react';
import { StateInspector } from 'reinspect'

import Routes from './components/routes';

export default () => {
    return <StateInspector name='DAWKMAAI'>
        <Routes />
    </StateInspector>;
}