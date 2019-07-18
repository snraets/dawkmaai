import _ from 'lodash';
import sw from 'stopword';

import ignore from './ignore';

export const sortingProperty = 'Region'

export const groupInstitutions = (master) => {
    return _.groupBy(master, sortingProperty);
};

export const getInstitutionNames = (institutions) => {
    return institutions.map(item => sw.removeStopwords(item['Institution Name']).slpit(' '), ignore).join(' ')
} 

export const retrieveCountry = (country, groupedInstitutions) => {
    return groupedInstitutions.find((item) => item[0].Country == country)
                .map(index => index['Institution Name'])
}