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
            console.log('wrong command');
            break;
    }
};

// TODO you can do it!

// TODO Hi!
// TODO Как дела?
// TODO Veronika; 2013-12-25; С Наступающим 2014!
// TODO Veronika; 2014-12-25; С Наступающим 2015!
// TODO Veronika; 2015-12-25; С Наступающим 2016!
// TODO Veronika; 2016-12-25; С Наступающим 2017!
// TODO Veronika; 2017-12-25; С Наступающим 2018!
// TODO Veronika; 2018-12-25; С Наступающим 2019!
// TODO pe; 2018-12-26; Работать пора!!!
// TODO Не понимаю, что здесь происходит...
