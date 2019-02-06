function show(data){
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

            showObj.user = formatobj(obj.user, 10);
            userMax = findMax('user', findMax(showObj.user, userMax));

            showObj.date = formatobj(obj.date, 10);
            dateMax = findMax('date', findMax(showObj.date, dateMax));
            
            showObj.comment = formatobj(obj.comment, 50);
            commentMax = findMax('comment', findMax(showObj.comment, commentMax));
            
            showObj.fileName = formatobj(obj.fileName, 15);                     
            fileNameMax = findMax('fileName', findMax(showObj.fileName, fileNameMax));

            showData.push(showObj);
        }
    }

    const userobjDiff = getDiff(userMax, 'user'.length);
    const dateobjDiff = getDiff(dateMax, 'date'.length);
    const commentobjDiff = getDiff(commentMax, 'comment'.length);
    const fileNameobjDiff = getDiff(fileNameMax, 'fileName'.length);
        
    console.log(`  !  |  user${' '.repeat(userobjDiff)}  |  date${' '.repeat(dateobjDiff)}  |  comment${' '.repeat(commentobjDiff)}  |  fileName${' '.repeat(fileNameobjDiff)} 
${'-'.repeat(5*5 + userMax + dateMax + commentMax + fileNameMax)}`);
        
    for (obj of showData) {
        const userDiff = getDiff(userMax, obj.user.length);
        const dateDiff = getDiff(dateMax, obj.date.length);
        const commentDiff = getDiff(commentMax, obj.comment.length);
        const fileNameDiff = getDiff(fileNameMax, obj.fileName.length);
        console.log(`  ${obj.importance}  |  ${obj.user}${' '.repeat(userDiff)}  |  ${obj.date}${' '.repeat(dateDiff)}  |  ${obj.comment}${' '.repeat(commentDiff)}  |  ${obj.fileName}${' '.repeat(fileNameDiff)} `);
    }
    
    if (data.length > 0) {
        console.log(`${'-'.repeat(5*5 + userMax + dateMax + commentMax + fileNameMax)}`);
    }
}

function getDiff(num1, num2) { return Math.abs(num1 - num2) };

function formatobj(value, limit) { return value.length > limit ? `${value.substr(0, limit - 3)}...` : value };

function findMax(curValue, maxValue) { return curValue.length > maxValue ? curValue.length : maxValue };

module.exports = {
    show
};
