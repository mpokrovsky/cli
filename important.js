const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function important() {
    const data = processComments(getFileNames(), getComments(getFiles()));
    const importantList = data.reduce((acc, el) => el.importance === '!' ? [...acc, el] : acc, []);
    output(importantList);    
}

module.exports = {
    important
};
