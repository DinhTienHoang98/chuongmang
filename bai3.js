// -- CHỌN CHỨC NĂNG --

// Nhập mảng
// Xuất mảng
// In số nguyên tố
// In số hoàn hảo
// Đếm số 0
// Đếm số nguyên tố
// Đếm số hoàn hảo
// Thoát
var arr = [];
var check = true;
// Hàm check input
function inputNumber(so) {
    var number = prompt(so);
    if (number === '' || number === null) {
        console.log('Mời nhập lại');
        check = false;
    } else if (isNaN(number)) {
        console.log('Nhập chưa đúng định dạng');
        check = false;
    } else {
        return Number(number);
    }
};
// Hàm nhập mảng
function nhapmang() {
    if (!check) {
        alert('Lỗi khi nhập');
    } else {
        var soLuong = prompt('Nhập số lượng các số trong mảng');
        for (var i = 0; i < soLuong; i++) {
            var so = inputNumber(`Nhập số thứ: ${i + 1}`);
            if (check) {
                arr.push(so);
                console.log('Nhập mảng thành công');
            } else {
                console.log('Nhập mảng thất bại');
                break;
            }
        }
    }
};
// Hàm xuất mảng 
function xuatmang() {
    if (arr.length === 0) {
        console.log('Mảng rỗng');
    } else {
        console.log('các số trong mảng là: ' + arr);
    }
};
// hàm in số nguyên tố
function lasonguyento(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

function insonguyento() {
    var soNguyenTo = [];
    for (var i = 0; i < arr.length; i++) {
        if (lasonguyento(arr[i])) {
            soNguyenTo.push(arr[i]);
        }
    }
    if (soNguyenTo.length === 0) {
        console.log('Không có số nguyên tố trong mảng.');
    } else {
        console.log('Các số nguyên tố trong mảng là: ' + soNguyenTo.join(', '));
    }
};

// Hàm in số hoàn hảo
function lasohoanhao(num) {
    if (num < 1) {
        return false;
    } else {
        var sum = 0;
        for (var i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum === num;
    }
};
function insohoanhao() {
    var soHoanHao = [];
    for (var i = 0; i < arr.length; i++) {
        if (lasohoanhao(arr[i])) {
            soHoanHao.push(arr[i]);
        }
    }
    if (soHoanHao.length === 0) {
        console.log('Không có số hoàn hảo trong mảng.');
    } else {
        console.log('Các số hoàn hảo trong mảng là: ' + soHoanHao.join(', '));
    }
};
// Hàm đếm số 0
function demso0() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            dem++;
        }
    }
    if (dem === 0) {
        console.log('mảng không có số 0');
    } else {
        console.log('Số lượng số 0 trong mảng là: ' + dem);
    }
};

// Hàm đếm sô nguyên tố
function demsonguyento() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (lasonguyento(arr[i])) {
            dem++;
        }
    }
    if (dem === 0) {
        console.log('mảng không có số nguyên tố');
    } else {
        console.log('Số lượng số nguyên tố có trong mảng là: ' + dem);
    }
};
// Hàm đếm số hoàn hảo
function demsohoanhao() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (lasohoanhao(arr[i])) {
            dem++;
        }
    }
    if (dem === 0) {
        console.log('mảng không có số hoàn hảo');
    } else {
        console.log('Số lượng số hoàn hảo có trong mảng là: ' + dem);
    }
}
var menu = ` ====== CHỌN CHỨC NĂNG ========
1. Nhập mảng
2. Xuất mảng
3. In số nguyên tố
4. In số hoàn hảo
5. Đếm số 0
6. Đếm số nguyên tố
7. Đếm số hoàn hảo
8. Thoát
`;
do {
    var choice = prompt(menu);
    if (choice === '1') {
        nhapmang();
    } else if (choice === '2') {
        xuatmang();
    } else if (choice === '3') {
        insonguyento();
    } else if (choice === '4') {
        insohoanhao();
    } else if (choice === '5') {
        demso0();
    } else if (choice === '6') {
        demsonguyento();
    } else if (choice === '7') {
        demsohoanhao();
    } else if (choice === '8') {
        console.log('Bạn đã thoát chương trình');
        break;
    } else {
        console.log('Chức năng không hợp lệ, chọn lại.');
        continue;
    }
} while (true);

