import axios from 'axios'
import csv from 'csvtojson';
import sw from 'stopword';

import ignore from '../lib/ignore';

const masterURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpuUXvL169RmPpJS-BOig45qfK7CFNzILJTILsx8qeVZ6jjQKjuAonucy1u4FnynoPzHm4ZeP7LOPK/pub?output=csv'

export default async () => {
    const masterCSV = await axios.get(masterURL)
        .then(res => res.data);

    const master = await csv().fromString(masterCSV);

    return {
        full: master,
        institutions: master
            .map( index => { 
                return index['Institution Name'].toLowerCase();
                // console.log(ignore);
                // return  sw.removeStopwords(index['Institution Name']).slpit(' '), ignore).join(' ');
                // const xx = sw.removeStopwords(index['Institution Name'].toLowerCase().split(' '), ['BANK']).join(' ');
                // console.log(index['Institution Name'].toLowerCase(), ' -- ', sw.removeStopwords(index['Institution Name'].toLowerCase().split(' '), ignore).join(' '));
                // return xx;
            })
    }
}
