var number = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

//// Viết 1 function getTotalObjectValue 1 parameter truyền vào obj và 1 function getTotalArrayValue 2 paramter, 1 la arr, 
//// 2 la callback, function getTotalObjectValue cần kiểm tra obj truyền vào có valid không, nếu không sẽ trả về lỗi, 
//// nếu valid thì lấy hết value của obj đó chuyển thành 1 array, sau đó gọi đến getTotalArrayValue để tính tổng các số 
//// trong array đó và dùng callback để lấy dữ liệu về

function getTotalObjectValue(obj) {
    if (Object.keys(obj) == 0) {
        return false;
    }
    return Object.values(obj);
}

let result = getTotalObjectValue(number);

function getTotalArrayValue(arr, cb) {
    if(arr == false) {
        return cb('No value');
    }
    else{
        let result = arr.reduce((a,b) => {
            return a + b;
        });
        cb(result);
    }
}

getTotalArrayValue(result, (err, result) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(result)
    }
})