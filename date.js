const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function date(dateGiven){
    if (dateGiven === undefined) {
        console.log('Enter the date!');
        return;
    }
    const data = processComments(getFileNames(), getComments(getFiles()));
    let dateList = [];
    const formatChangedDateGiven = new Date(dateGiven);
    for (let obj of data) {
        const formatChangedDate = new Date(obj.date);
        if (formatChangedDate >= formatChangedDateGiven) {
            dateList.push(obj);
        }
    }
    output(dateList);
}

module.exports = {
    date
};
