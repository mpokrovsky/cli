function output(data) {
    let result = '';
    let userMax = dateMax = commentMax = fileNameMax = 0;
    let showData = [];
    if (data.length === 0 ) {
        userMax = 'user'.length;
        dateMax = 'date'.length;
        commentMax = 'comment'.length;
        fileNameMax = 'fileName'.length;
    }
    else {
        for (obj of data) {
            const showObj = new Object();
            showObj.importance = obj.importance;

            showObj.user = formatStr(obj.user, 10);
            userMax = findMax('user', findMax(showObj.user, userMax));

            showObj.date = formatStr(obj.date, 10);
            dateMax = findMax('date', findMax(showObj.date, dateMax));
            
            showObj.comment = formatStr(obj.comment, 50);
            commentMax = findMax('comment', findMax(showObj.comment, commentMax));
            
            showObj.fileName = formatStr(obj.fileName, 15);                     
            fileNameMax = findMax('fileName', findMax(showObj.fileName, fileNameMax));

            showData.push(showObj);
        }
    }

    const userStrDiff = getDiff(userMax, 'user'.length);
    const dateStrDiff = getDiff(dateMax, 'date'.length);
    const commentStrDiff = getDiff(commentMax, 'comment'.length);
    const fileNameStrDiff = getDiff(fileNameMax, 'fileName'.length);
        
    result += `  !  |  user${' '.repeat(userStrDiff)}  |  date${' '.repeat(dateStrDiff)}  |  comment${' '.repeat(commentStrDiff)}  |  fileName${' '.repeat(fileNameStrDiff)} 
${'-'.repeat(5*5 + userMax + dateMax + commentMax + fileNameMax)}\n`;
        
    for (obj of showData) {
        const userDiff = getDiff(userMax, obj.user.length);
        const dateDiff = getDiff(dateMax, obj.date.length);
        const commentDiff = getDiff(commentMax, obj.comment.length);
        const fileNameDiff = getDiff(fileNameMax, obj.fileName.length);
        result += `  ${obj.importance}  |  ${obj.user}${' '.repeat(userDiff)}  |  ${obj.date}${' '.repeat(dateDiff)}  |  ${obj.comment}${' '.repeat(commentDiff)}  |  ${obj.fileName}${' '.repeat(fileNameDiff)} \n`;
    }
    
    if (data.length > 0) {
        result += `${'-'.repeat(5*5 + userMax + dateMax + commentMax + fileNameMax)}`;
    }
    console.log(result);
}

function getDiff(num1, num2) { return Math.abs(num1 - num2) };

function formatStr(value, limit) { return value.length > limit ? `${value.substr(0, limit - 3)}...` : value };

function findMax(curValue, maxValue) { return curValue.length > maxValue ? curValue.length : maxValue };

module.exports = {
    output
}
