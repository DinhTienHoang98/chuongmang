// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);//0 - 1 (0, 0.01,... ,1)  max = 10
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}

// Hàm sắp xếp nổi bọt
function bubbleSort(array) {
    var size = array.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Hàm tìm một số trong mảng
function search(number, array) {
    for (let n of array) {
        if (n === number) return n;
    }
}

var arrayNumber = [];

for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(11));
}
console.log(arrayNumber);

// var newArr = [];
// for (var i = 0; i < arrayNumber.length; i++) {
//     if (newArr.indexOf(arrayNumber[i]) === -1) {
//         newArr.push(arrayNumber[i])
//     }
// }
//console.log(newArr);

var input = prompt('Nhập số muốn tìm: ');

if (search(Number(input), arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(Number(input), arrayNumber);
if (idx !== -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}

bubbleSort(arrayNumber);
console.log(arrayNumber);