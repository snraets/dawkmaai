import React, {useContext} from 'react';
import csv from 'csvtojson';

import {AppContextConsumer} from '../routes';
import compare from '../../lib/compare';

export default () => {

    const appContext = useContext(AppContextConsumer);

    //masterState

    const handleFileSelection = (evt) => {
        
        const comparisonFile = new FileReader();

        comparisonFile.onload = (res) => {

            if ((res.currentTarget as any).result) {
                csv()
                .fromString((res.currentTarget as any).result.toString())
                .then(results => {

                    //debugger;

                    const xx = compare( (appContext.masterState as any ).institutions, results)

                    //debugger;

                    appContext.comparisonDispatch({type: 'SET', payload: xx})
                }) 
            }
        }

        comparisonFile.readAsText(evt.target.files[0]);
    }

    return <div>
        <input
            onChange={handleFileSelection} 
            accept='.csv,text/csv'
            type='file' />
    </div>;
}