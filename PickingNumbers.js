'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let minValue = a[0];
    let len = 1;
    let maxLen = 1;
    for (let i = 1; i < a.length; i++) {
        const diff = a[i] - minValue;
        if (diff <= 1) {
            len++;
        } else {
            if (len > maxLen) {
                maxLen = len;
            }
            len = 1;
            minValue = a[i];
        }
    }
    if (len > maxLen) {
        maxLen = len;
    }
    return maxLen;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
