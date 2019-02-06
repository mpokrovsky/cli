const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');
const { getComments, getFileNames, processComments } = require('./processData');
const { show } = require('./show');
const { important } = require('./important');
const { date } = require('./date');
const { user } = require('./user');
const { sort } = require('./sort');


app();

function app() {
    const files = getFiles();
    const commentsData = processComments(getFileNames(), getComments(files));
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



// TODO:you can do it!2

// TODO :you can do it!3

// TODO: you can do it!4

// TODO : you can do it!5

//TODO : you can do it!1

// TODO     : you can do it!6

// TODO :    you can do it!7