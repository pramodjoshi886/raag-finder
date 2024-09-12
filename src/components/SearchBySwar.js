import raagas from './Raagas';

function SearchBySwar(aaroh, avaroh) {
    aaroh.push('S')
    avaroh.push('S')
    const temp_aaroh = [...aaroh].sort()
    const temp_avaroh = [...avaroh].sort()

    const matchingRaags = raagas.filter(raag => {
        // console.log("".join(aaroh).split(",").sort())
        var temp_raag_aaroh = raag.aaroha.split(",").sort()
        var temp_raag_avaroh = raag.avaroh.split(",").sort()

        if (temp_raag_aaroh.toString() === temp_aaroh.toString() && temp_raag_avaroh.toString() === temp_avaroh.toString()) {
            // console.log(raag)
            return raag;
        } else {
            return null;
            // console.log(raag.aaroha.toString(), aaroh.toString())
            // console.log(raag.avaroh.toString(), avaroh.toString())
        }
    });

    console.log(matchingRaags, 'matchin chin')
    return matchingRaags.length && matchingRaags[0].label

}

export default SearchBySwar;
