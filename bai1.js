// Bài 1: Viết chương trình nhập 1 mảng, sau đó xuất mảng vừa nhập ra màn hình
var daySo = [];
function nhapDaySo() {
    var soLuong = prompt('Nhập số lượng các số: ');
    for (var i = 0; i < soLuong; i++) {
        var so = Number(prompt(`Nhập số thứ ${i + 1}`));
        daySo.push(so);
    }
    console.log('các số vừa nhập là: ' + daySo);
}
nhapDaySo();