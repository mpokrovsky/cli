function user(data, name) {
    const regExp = new RegExp(name + '.*', 'gi',);
    let userMax = 0;
    let dateMax = 0;
    let commentMax = 0;
    let fileNameMax = 0;
    let showData = [];
    for (str of data) {
        const showObj = new Object();
        showObj.importance = str.importance;
        showObj.user = str.user.length > 10 ? `${str.user.substr(0,7)}...` : str.user;
        userMax = showObj.user.length > userMax ? showObj.user.length : userMax;
        showObj.date = str.date.length > 10 ? `${str.date.substr(0,7)}...` : str.date;
        dateMax = showObj.date.length > dateMax ? showObj.date.length : dateMax;
        showObj.comment = str.comment.length >= 50 ? str.comment.substr(0,47) + '...' : str.comment;
        commentMax = showObj.comment.length > commentMax ? showObj.comment.length : commentMax;
        showObj.fileName = str.fileName.length >= 15 ? `${str.fileName.substr(0,12)}...` : str.fileName;
        fileNameMax = showObj.fileName.length > fileNameMax ? showObj.fileName.length : fileNameMax;
        showData.push(showObj);
    }
    let flag = false;
    for (obj of showData) {
        const userDiff = getDiff(userMax, obj.user.length);
        const dateDiff = getDiff(dateMax, obj.date.length);
        const commentDiff = getDiff(commentMax, obj.comment.length);
        const fileNameDiff = getDiff(fileNameMax, obj.fileName.length);
        if (flag === false) {
            const userStrDiff = getDiff(userMax, 'user'.length);
            const dateStrDiff = getDiff(dateMax, 'date'.length);
            const commentStrDiff = getDiff(commentMax, 'comment'.length);
            const fileNameStrDiff = getDiff(fileNameMax, 'fileName'.length);
            console.log(`  !  |  user${' '.repeat(userStrDiff)}  |  date${' '.repeat(dateStrDiff)}  |  comment${' '.repeat(commentStrDiff)}  |  fileName${' '.repeat(fileNameStrDiff)} `);
            console.log(`${'-'.repeat(4*5 + 1 + userMax + dateMax + commentMax + fileNameMax)}`)
            flag = true;
        };
        console.log(`  ${obj.importance}  |  ${obj.user}${' '.repeat(userDiff)}  |  ${obj.date}${' '.repeat(dateDiff)}  |  ${obj.comment}${' '.repeat(commentDiff)}  |  ${obj.fileName}${' '.repeat(fileNameDiff)} `);
    }
}

module.exports = {
    user
};
