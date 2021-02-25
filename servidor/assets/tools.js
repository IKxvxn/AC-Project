function normaliceUsername(string) {
    if (string==''){
        return ''
    } 
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function getRandom(num) {
    return Math.floor(Math.random() * num)
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function compareAbsolute(stringA, stringB) {
    stringA = stringA.replace(/[^A-Za-z0-9]/gi,"").toLowerCase()
    stringB = stringB.replace(/[^A-Za-z0-9]/gi,"").toLowerCase()

    return stringA.includes(stringB)
}

module.exports = {
    normaliceUsername, getRandom, shuffle, compareAbsolute
}