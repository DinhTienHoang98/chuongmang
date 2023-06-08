// -- CHỌN CHỨC NĂNG --
// 1. Nhập mảng
// 2. Xuất mảng
// 3. Tìm số lớn nhất
// 4. Tìm số nhỏ nhất
// 5. Tính tổng
// 6. Thoát

var check = true;

function inputNumber(so) {
    var number = prompt(so);
    if (number === '' || number === null) {
        console.log('mời nhập lại');
        check = false;
    } else if (isNaN(number)) {
        console.log('Nhập chưa đúng định dạng');
        check = false;
    } else {
        return Number(number);
    }
}
// Hàm nhập mảng
var daySo = [];
function nhapmang() {
    if (!check) {
        alert('Lỗi khi nhập');
    } else {
        var soLuong = Number(prompt('nhập số lượng các số trong dãy: '));
        for (var i = 0; i < soLuong; i++) {
            var so = inputNumber(`Nhập số thứ ${i + 1}: `);
            if (check) {
                daySo.push(so);
                console.log('Nhập mảng thành công');
            } else {
                console.log('Nhập mảng thất bại');
                break;
            }
        }
    }
}
// hàm xuất mảng
function xuatmang() {
    if (daySo === 0) {
        console.log('Mảng rỗng');
    } else {
        console.log('Dãy số là: ' + daySo);
    }
};

// Hàm Tìm số lớn nhất
function maxarray() {
    var max = daySo[0];
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] > max) {
            max = daySo[i];
        }
    }
    console.log('Số lớn nhất trong mảng là: ' + max);
};

// Hàm tìm số nhỏ nhất
function minarray() {
    var min = daySo[0];
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] < min) {
            min = daySo[i];
        };
    };
    console.log('sô nhỏ nhất trong mảng là: ' + min);
};

// Hàm tính tổng
function sumarray() {
    var sum = 0;
    for (var i = 0; i < daySo.length; i++) {
        sum += daySo[i];
    };
    console.log('Tổng các số trong mảng là: ' + sum);
};
// Tạo menu
function menuHienThi() {
    var menu = `
    ====== MENU CHƯƠNG TRÌNH =======
     1. Nhập mảng
     2. Xuất mảng
     3. Tìm số lớn nhất
     4. Tìm số nhỏ nhất
     5. Tính tổng
     6. Thoát
    
     CHỌN THAO TÁC THỰC HIỆN
    `;
    do {
        var input = prompt(menu);
        if (input === '1') {
            nhapmang();
        } else if (input === '2') {
            xuatmang();
        } else if (input === '3') {
            maxarray();
        } else if (input === '4') {
            minarray();
        } else if (input === '5') {
            sumarray();
        } else if (input === '6') {
            console.log('Bạn đã thoát chương trình');
            break;
        } else {
            alert('Lựa chọn không có !!!');
            continue;
        }
    } while (true);
};
menuHienThi();
