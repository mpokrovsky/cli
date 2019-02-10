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
    switch (command.split(' ')[0]) {
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
            console.log('Wrong command');
            break;
    }
};

//TODO : you can do it!2 -

// TODO :you can do it!3 +

// TODO: you can do it!4 -

// TODO:you can do it!5 -

// TODO : you can do it!1 +

// TODO     : you can do it!6 +

// TODO :    you can do it!7 +
