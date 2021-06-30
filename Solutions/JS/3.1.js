function list(names) {
    const len = names.length;

    if (len == 0) return '';

    let preAmpersand = names.slice(0, len - 1).map(x => x.name).join(", ");
    let ampersandOrVoid = len > 1 ? ' & ' : '';
    let lastName = names[len - 1].name;

    return preAmpersand + ampersandOrVoid + lastName;
}