function solve(arr) {
    arr.sort((a, b) => a - b);
    let output = [];

    while (arr.length > 0) {
        output.push(arr.shift());
        output.push(arr.pop());
    }

    return output;    
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));