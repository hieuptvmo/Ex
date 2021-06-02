var number = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

//// Sử dụng forEach và while để chia array trên thành 2 mảng, 1 mảng chẵn, 1 mảng lẻ

let even = [];
let odd = [];

number.forEach((value) => {
    if(value % 2 == 0) {
        even.push(value);
    }
    else {
        odd.push(value);
    }
});

console.log(even)
console.log(odd)

//

let z = 0;

while(z < number.length) {
    if(number[z] % 2 == 0) {
        even.push(number[z]);
    }
    else {
        odd.push(number[z]);
    }
    z++;
}

console.log(even)
console.log(odd)