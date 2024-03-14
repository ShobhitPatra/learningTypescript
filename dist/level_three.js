"use strict";
//Arrays in typescript
const minimum = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log(minimum([2, 3, 45, 6]));
