const quarterOf = (month) => {
    let qrtr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]
    return qrtr[month - 1]
}