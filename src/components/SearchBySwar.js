import raagas from './Raagas';

function SearchBySwar(aaroh, avaroh) {
    aaroh.push('S')
    avaroh.push('S')
    console.log(aaroh, ' aaroh')
    console.log(avaroh, 'avaroh')
    const matchingRaags = raagas.filter(raag => {

        if (raag.aaroha.toString() === aaroh.toString() && raag.avaroh.toString() === avaroh.toString()) {
            console.log(raag)
            return raag;
        } else {
            console.log(raag.aaroha.toString(), aaroh.toString())
            console.log(raag.avaroh.toString(), avaroh.toString())
        }
    });

    console.log(matchingRaags, 'matchin chin')
    return matchingRaags.length && matchingRaags[0].label

}

export default SearchBySwar;
