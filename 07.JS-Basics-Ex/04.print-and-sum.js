function solve(start, end) {
    let sum = 0; 
    let nums = '';
    for (let i = start; i <= end; i++) {
        nums += i + ' ';
        sum += i;
    }

    console.log(nums);    
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);