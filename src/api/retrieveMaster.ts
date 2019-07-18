import axios from 'axios'
import csv from 'csvtojson';

const masterURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTpuUXvL169RmPpJS-BOig45qfK7CFNzILJTILsx8qeVZ6jjQKjuAonucy1u4FnynoPzHm4ZeP7LOPK/pub?output=csv'

export default async () => {
    const masterCSV = await axios.get(masterURL)
        .then(res => res.data);

    const master = await csv().fromString(masterCSV);

    return {
        full: master,
        institutions: master.map( index => index['Institution Name'] )
    }
}
