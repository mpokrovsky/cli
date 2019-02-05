function user(data, nameGiven) {
    let userList = [];
    for (let obj of data) {
        if (obj.user.substr(0, nameGiven.length).toLowerCase() === nameGiven.toLowerCase()) {
            userList.push(obj);
        }
    }
    return userList;
}
 
module.exports = {
    user
};
