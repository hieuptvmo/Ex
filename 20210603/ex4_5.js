const numbers = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

//// Sử dụng reduce để loại bỏ những số trùng lặp, vd: có 2 số 1 ở trong mảng trên thì loại bỏ 1 số, chỉ giữ lại 1 số 1

let remove = [];

remove = numbers.reduce((arr, value) => {
    if (arr.indexOf(value) === -1) {
        arr.push(value);
    }
    return arr;
}, []);

console.log(remove)

//// Sử dụng reduce để tính tổng tất cả các số trong array

let sum = remove.reduce((a, b) => a + b);

console.log(sum)