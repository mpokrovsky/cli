function sort(data, arg) {
    let sortList = [];
    switch (arg) {
        case 'importance':
            sortList = data.sort(sortByImportance);
            break;
        case 'user':
            sortList = data.sort(sortByUser);
            break;
        case 'date':
            sortList = data.sort(sortByDate);
            break;
    }
    return sortList;
}

function sortByImportance(value1, value2) { return value1.importanceAmount < value2.importanceAmount ? 1 : -1; }

function sortByUser(value1, value2) { 
    if (value1.user === '') {
        return 1;
    }
    if (value2.user === '') {
        return -1;
    }
    return value1.user.toLowerCase() > value2.user.toLowerCase() ? 1 : -1; }

function sortByDate(value1, value2) { return value1.date === '' ? 1 : new Date(value1.date) < new Date(value2.date) ? 1 : -1; }

module.exports = {
    sort
}
