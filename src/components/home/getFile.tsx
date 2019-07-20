import React from 'react';

import csv from 'csvtojson';

export default () => {

    const handleFileSelection = (evt) => {
        
        const comparisonFile = new FileReader();
        comparisonFile.readAsText(evt.target.files[0]);

        if (comparisonFile.result) {
            csv()
                .fromString(comparisonFile.result.toString())
                .then(results => {

                })

        }

        

        

        debugger;
    }

    return <div>
        <input
            onChange={handleFileSelection} 
            accept='.csv,text/csv'
            type='file' />
    </div>;
}