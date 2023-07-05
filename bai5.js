// var arrNumber = ['111', '222', '333', '444']
// Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
// Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
// Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình

var arrNumber = ['111', '222', '333', '444'];
for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == 222) {
        arrNumber.splice(i, 1);
    }
}
console.log(arrNumber);

var arrNumber = ['111', '222', '333', '444'];
for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === 444) {
        arrNumber.splice(i, 1, '555');
    }
}
console.log(arrNumber);

var arrNumber = ['111', '222', '333', '444'];
for (var i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = Number(arrNumber[i]);
}
console.log(arrNumber);