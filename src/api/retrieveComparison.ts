import csv from 'csvtojson';

const fileName = 'Global Names.csv';

export default () => {
    return csv().fromFile(fileName);
}