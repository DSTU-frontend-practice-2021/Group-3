var humanYearsCatYearsDogYears = function(humanYears) {
    switch (humanYears) {
        case 1:
            return [1, 15, 15];
        default:
            return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)];
    }
}