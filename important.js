function important(data) {
    let importantList = [];
    for (let obj of data) {
        if (obj.importance === '!') {
            importantList.push(obj);
        }
    }
    return importantList;
}

module.exports = {
    important
};
