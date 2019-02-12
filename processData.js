const { getAllFilePathsWithExtension } = require('./fileSystem');
const { readFile } = require('./fileSystem');

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

function getImportance(commentString) {
    const res = String(commentString).split("").reverse().reduce((acc,val) => val === '!' ? acc += 1 : acc, 0);
    return [res === 0 ? ' ' : '!', res];
} 

function getUserName(commentString) {
    const regExp = /(?<=\/\/ *todo )[\w ]*(?=;.*;)/gi;
    const res = String(commentString).match(regExp);
    return res === null ? '' : `${res}`;
}

function getDate(commentString) {
    const regExp = /(?<=;.*)\w.*(?=;)/gi;
    const res = String(commentString).match(regExp);
    const notDate = /[^-\d]+/;
    return res === null ? '' : notDate.test(res) ? 'invalid' : `${res}`;
}

function getText(commentString) { 
    const date = /(?<=;).*(?=;)/gi;
    const regExp1 = /(?<=; *.*;.*)[^ ].*/gi; // есть спец разметка
    const regExp2 = /(?<=\/\/ *todo.*)[^ :].*/gi; // свободный формат 
    if (date.test(commentString)) { 
      return `${String(commentString).match(regExp1)}`;
    }
    return `${String(commentString).match(regExp2)}`;
}

function getComments(files) {
    const regExp = /\/\/ *todo *:* *.+/gi;
    return files.map(file => file.match(regExp));
}

function getFileNames() {
    const regExp = /(?<=\/)\w+\.js/gi;
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
    getFiles,
    getComments,
    getFileNames,
    processComments
};
