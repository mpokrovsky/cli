const { getComments, getFileNames, processComments, getFiles } = require('./processData');
const { output } = require('./output');

function user(nameGiven) {
    if (nameGiven === undefined) {
        console.log('Enter the username!');
        return;
    }
    const data = processComments(getFileNames(), getComments(getFiles()));
    let userList = [];
    for (let obj of data) {
        if (obj.user.substr(0, nameGiven.length).toLowerCase() === nameGiven.toLowerCase()) {
            userList.push(obj);
        }
    }
    output(userList);
}
 
module.exports = {
    user
};
