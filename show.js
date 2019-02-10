const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function show(){
    const data = processComments(getFileNames(), getComments(getFiles()));
    output(data);     
}

module.exports = {
    show
};
