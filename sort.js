const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function sort(arg) {
    if (arg === undefined) {
        console.log('Enter the parameter!');
        return;
    }
    const data = processComments(getFileNames(), getComments(getFiles()));
    let sortList = notEmptyElList = emptyElList = [];
    switch (arg) {
        case 'importance':
            sortList = data.sort(sortByImportance);
            break;
        case 'user':            
            notEmptyElList = data.filter(val => val.user !== '').sort(sortByUser);
            emptyElList = data.filter(val => val.user === '');
            sortList = [...notEmptyElList, ...emptyElList];
            break;
        case 'date':            
            notEmptyElList = data.filter(val => val.date !== '').sort(sortByDate);
            emptyElList = data.filter(val => val.date === '');
            sortList = [...notEmptyElList, ...emptyElList];
            break;
        default:
            console.log('No such parameter');
            return;
    }
    output(sortList);
}

function sortByImportance(value1, value2) { return value1.importanceAmount < value2.importanceAmount ? 1 : -1; }

function sortByUser(value1, value2) { return value1.user.toLowerCase() > value2.user.toLowerCase() ? 1 : -1; }

function sortByDate(value1, value2) { return new Date(value1.date) < new Date(value2.date) ? 1 : -1; }

module.exports = {
    sort
}
