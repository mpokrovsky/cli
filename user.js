const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function user(nameGiven) {
    if (nameGiven === undefined) {
        console.log('Enter the username!');
        return;
    }
    const data = processComments(getFileNames(), getComments(getFiles()));
    const userList = data.reduce((acc, el) => 
        el.user.substr(0, nameGiven.length).toLowerCase() === nameGiven.toLowerCase() ? [...acc, el] : acc, []);
    output(userList);
}
 
module.exports = {
    user
};
