import stringSimilarity from 'string-similarity';

export default (master: string[], comparison: any[]) => {
    return comparison.map( item => {
        return {
            ...item,
            comparison: institutionCompare(master, item['Institution Name'])
        }        
    });
}

export const institutionCompare = (master: string[], comparison: string) => {
    return stringSimilarity.findBestMatch(comparison, master)
}