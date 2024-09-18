export function pointsForWord(word) {
    let points = 0;
    let eligible = true;
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    for (const char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            points += 1;
        } else if (consonants.includes(char)) {
            points += 2;
        } else {
            eligible = false;
            break;
        }
    };
    return eligible ? points : 0;
};