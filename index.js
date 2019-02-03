const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');
const { getComments, getFileNames, processComments } = require('./processData');
const { show } = require('./show');

app();

function app() {
    const files = getFiles();
    const arrayOfComments = getComments(files);
    const fileNames = getFileNames(); 
    const commentsData = processComments(fileNames, arrayOfComments);
    show(commentsData);
    //console.log('Please, write your command!');
    //readLine(processCommand, commentsData);
}

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

function processCommand(command, data) {
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
        case 'user':
            break;
        case 'sort':
            break;
        case 'show':
            console.log(typeof(data));
            //show(data);
            break;
        case 'date':
            break;
        case 'important':
            break;
        default:
            console.log('wrong command');
            break;
    }
}

// TODO you can do it!
