const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function important() {
    const data = processComments(getFileNames(), getComments(getFiles()));
    let importantList = [];
    for (let obj of data) {
        if (obj.importance === '!') {
            importantList.push(obj);
        }
    }
    output(importantList);    
}

module.exports = {
    important
};
