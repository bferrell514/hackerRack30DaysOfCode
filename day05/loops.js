process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    var n = parseInt(readLine());
    for (var i = 1; i <= 10; i++) {
        var result = n.toString() + ' x ' + i.toString() + ' = ' + (n * i).toString();
        console.log(result);
    }
}
