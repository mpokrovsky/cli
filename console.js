const readline = require('readline');

// TODO ; eryu; Можно ли написать более лаконично?
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function readLine(callback) {
    rl.on('line', callback); // TODO pe; 2015-08-10; а какая будет кодировка?
}

// TODO digi; fghk; добавить writeLine!!!

module.exports = {
    readLine,
};
