const { readLine } = require('./console');
const { show } = require('./show');
const { important } = require('./important');
const { date } = require('./date');
const { user } = require('./user');
const { sort } = require('./sort');


app();

function app() {
    console.log('Please, write your command!');
    readLine(processCommand);
}

function processCommand(input) {
    const command = input.split(' ')[0];
    const argument = input.split(' ')[1];
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
        case 'show':
            show();
            break;
        case 'important':
            important();
            break;
        case 'sort':
            sort(argument);
            break;
        case 'date':
            date(argument);
            break;
        case 'user':
            user(argument);
            break;
        default:
            console.log('wrong command');
            break;
    }
};

// TODO you can do it!
