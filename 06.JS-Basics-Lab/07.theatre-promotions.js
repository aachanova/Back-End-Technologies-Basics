function solve(day, age) {
    let price;

    switch (day) {
        case 'Weekday':
            if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            }
            break;
        case 'Weekend':
            if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            }
            break;
    }

    price = price !== undefined ? price + '$' : 'Error!'

    console.log(price);
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);