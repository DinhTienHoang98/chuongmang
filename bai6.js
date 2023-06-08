// -- CHỌN CHỨC NĂNG --

// Tạo mảng
// Xuất mảng
// Đảo mảng
// Sắp xếp mảng
// Tìm 1 số
// Thoát

var array = [];
function taomang(max) {
    return Math.floor(Math.random() * max);
}
for (var i = 0; i < 10; i++) {
    array.push(taomang(101));
}

function xuatmang() {
    console.log('các phần tử trong mảng là: ' + array);
}

function daomang() {
    var newarr = array.slice().reverse();
    console.log('Mảng sau khi đảo là: ' + newarr);
};

function sapxepmang() {
    var len = array.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log('Mảng sau khi sắp xếp là: ' + array);
};

// Hàm tìm chỉ số của một số trong mảng
function timchiso(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}
// Hàm tìm một số trong mảng
function search(number, array) {
    for (let n of array) {
        if (n === number) return n;
    }
};


var menu = `
1. Tạo mảng
2. Xuất mảng
3. Đảo mảng
4. Sắp xếp mảng
5. Tìm 1 số
6. Thoát
`;

do {
    var input = prompt(menu);
    if (input === '1') {
        taomang();
        console.log('Tạo mảng thành công!');
    } else if (input === '2') {
        xuatmang();
    } else if (input === '3') {
        daomang();
    } else if (input === '4') {
        sapxepmang();

    } else if (input === '5') {
        var number = prompt('Nhập số cần tìm');
        if (search(Number(number), array)) {
            console.log('Có tìm thấy số ' + number + ' trong mảng');
            var idx = timchiso(Number(number), array);
            console.log("Vị trí tìm thấy số " + number + " là: " + idx);
        } else {
            console.log('Không tìm thấy!');
        }
    } else if (input === '6') {
        console.log('bạn đã thoát');
        break;
    } else {
        console.log('Lựa chọn không hợp lệ');
        continue;
    }
} while (true);