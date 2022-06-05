function isAnagram() {
    word1= "azam"
word2 = "maza"
    if (word1.length !== word2.length) return false ;
    const counts = {};
    for (let c of word2) {
        counts[c] = (counts[c] || 0) + 1;
    }

    for (let c of word1) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
}