var number = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

//// Sort từ bé đến lớn array bên trên bằng 2 cách function có sẵn của array và sử dụng vòng lặp for

number.sort(function (a, b) {
    return a - b;
});

number.sort((a, b) => a - b);

for(var a = 1; a < number.length; a++)
    for(var b = 0; b < a; b++)
        if(number[a] < number[b]) {
            var i = number[a];
            number[a] = number[b];
            number[b] = i;
        }

console.log(number)