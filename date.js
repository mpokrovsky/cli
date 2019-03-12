const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function date(dateGiven){
    if (dateGiven === undefined) {
        console.log('Enter the date!');
        return;
    }
    const data = processComments(getFileNames(), getComments(getFiles()));
    const formatChangedDateGiven = new Date(dateGiven);
    const dateList = data.reduce((acc, el) => {
        const formatChangedDate = new Date(el.date);
        return formatChangedDate >= formatChangedDateGiven ? [...acc, el] : acc;
    }, []);
    output(dateList);
}

module.exports = {
    date
};
