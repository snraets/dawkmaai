import { Parser } from 'json2csv';
// import sw from 'stopword';
import fs from 'fs';

import stringSimilarity from 'string-similarity';

import retrieveMaster from './api/retrieveMaster';
import retrieveComparison from './api/retrieveComparison';

import scrubInstitution from './lib/updateName';

import {groupInstitutions, getInstitutionNames, sortingProperty} from './lib/sortMaster';

(async () => {
    const [master, comparison] = await Promise.all([retrieveMaster(), retrieveComparison()]);

    // const groupedInstitutions = groupInstitutions(master.full);

    // debugger;

    const results = comparison.map((index) => {

        // const reducedList = groupedInstitutions[index[sortingProperty]]; // = retrieveCountry(groupedInstitutions, index.Country);
        let reducedList = undefined;
        // debugger;

        const s = stringSimilarity.findBestMatch(
            scrubInstitution(index['Institution Name']), 
            reducedList ? getInstitutionNames(reducedList) : master.institutions
        );

        // console.log({InstitutionName: index['Institution Name'], bestMatch: s.bestMatch.target})
        // debugger;

        return {...index, bestMatch: s.bestMatch.target}
    });

    const fields = ['Institution Name', 'bestMatch', 'Region','Institution Type','Country','Fiscal Year','Sub-Type'];

    const parser = new Parser({fields})

    const jj =parser.parse(results);

    fs.writeFileSync('wwww.csv', jj, 'utf8');

    // console.log(master);

})()