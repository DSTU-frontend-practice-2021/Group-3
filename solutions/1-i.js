const quarterOf = (month) => {
    if (month % 3 === 0) {
    return month / 3
    }
    else { return (Math.floor(month / 3) + 1) }
    }
    