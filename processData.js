const { getAllFilePathsWithExtension } = require('./fileSystem');

function getImportance(commentString) {
    const res = String(commentString).split("").reverse().reduce((acc,val) => val === '!' ? acc += 1 : acc, 0);
    return [res === 0 ? ' ' : '!', res];
} 

function getUserName(commentString) {
    const regExp = /(?<=\/\/ todo )[\w ]*(?=;)/gi;
    const res = String(commentString).match(regExp);
    return res === null ? '' : `${res}`;
}

function getDate(commentString) {
    const regExp = /(?<=; )[\d-]*(?=;)/gi;
    const res = String(commentString).match(regExp);
    return res === null ? '' : `${res}`;
}

function getText(commentString) { 
    const date = /(?<=; )[\d-]*(?=;)/gi;
    const regExp1 = /(?<=; [\d-]*; ).*/gi;
    const regExp2 = /(?<=\/\/ *?todo *?: *?).*/gi;
    if (date.test(commentString)) { // есть спец разметка
      return `${String(commentString).match(regExp1)}`;
    }
    return `${String(commentString).match(regExp2)}`;
}

function getComments(files) {
    const regExp = /\/\/ todo .+\n/gi;
    return files.map(file => file.match(regExp));
}

function getFileNames() {
    const regExp = /\w+.js/gi;
    return getAllFilePathsWithExtension(process.cwd(), 'js').map(str => str.match(regExp));
}

function processComments(fileNames, arrayOfComments) {
    let commentsData = [];
    for (let i in arrayOfComments) {
        for (let j in arrayOfComments[i]) {
            const commentObj = new Object();
            [commentObj.importance, commentObj.importanceAmount] = getImportance(arrayOfComments[i][j]);
            commentObj.user = getUserName(arrayOfComments[i][j]);
            commentObj.date = getDate(arrayOfComments[i][j]);
            commentObj.comment = getText(arrayOfComments[i][j]);
            commentObj.fileName = `${fileNames[i]}`;
            commentsData.push(commentObj);
        }
    }
    return commentsData;
}

module.exports = {
    getComments,
    getFileNames,
    processComments
};
