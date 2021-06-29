function solution(string) {
    let mySplits = string.split(/(?=[A-Z])/);
    return mySplits.join(' ');
    }