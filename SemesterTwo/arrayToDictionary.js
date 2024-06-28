let arr = [2, 3, 5, 3, 3, 2, 5];

const counter = {};

arr.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});

console.log(counter)