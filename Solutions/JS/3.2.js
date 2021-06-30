function solution(string) {
    let out = '';

    for (let i = 0; i < string.length; i++) {
        let char = string.slice(i, i + 1);

        if (char === char.toLowerCase()) {
            out += char;
        } else {
            out += ' ' + char;
        }
    }

    return out;
}