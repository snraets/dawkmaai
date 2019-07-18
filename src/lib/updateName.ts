import sw from 'stopword';

import ignore from './ignore';

export default (institutionName) => {
    return sw.removeStopwords(institutionName.split(' '), ignore).join(' ')
}