var testScore = {
    name: "",
    math: 0,
    physic: 0,
    chemistry: 0,
    avg: "?"
}
var i = 0;
function nhap() {
    // lấy dữ liệu từ input
    var ten = document.getElementById("name").value;
    var toan = document.getElementById("math").value;
    var ly = document.getElementById("physic").value;
    var hoa = document.getElementById("chemistry").value;

    testScore.name = ten;
    testScore.math = toan;
    testScore.physic = ly;
    testScore.chemistry = hoa;
    testScore.avg = "?";

    //xóa các dữ liệu sau khi nhập
    document.getElementById("name").value = "";
    document.getElementById("math").value = "";
    document.getElementById("physic").value = "";
    document.getElementById("chemistry").value = "";

    //thêm dòng vào bảng khi nhập dữ liệu
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var stt = row.insertCell(0);
    var ht = row.insertCell(1);
    var mt = row.insertCell(2);
    var vl = row.insertCell(3);
    var hh = row.insertCell(4);
    var tb = row.insertCell(5);
    //đưa các dữ liệu từ input vào trong các dòng mới tạo
    i++;
    stt.innerHTML = i;
    ht.innerHTML = testScore.name;
    mt.innerHTML = testScore.math;
    vl.innerHTML = testScore.physic;
    hh.innerHTML = testScore.chemistry;
    tb.innerHTML = "?";
}
//Tính điểm trung bình
function average() {
    var table = document.getElementById("table");
    var y;
    for (var i = 1, row; row = table.rows[i]; i++) {
        var sum = 0;
        for (var j = 2; j < 5; j++) {
            y = parseFloat(row.cells[j].innerHTML);
            sum = sum + y;
        }
        var tb = sum / 3;
        row.cells[5].innerHTML = tb.toFixed(2);
    }
}
//Bôi đỏ dòng được học sinh giỏi
function classification() {
    var table = document.getElementById("table");
    var y;
    for (var i = 1, row; row = table.rows[i]; i++) {
        var sum = 0;
        for (var j = 2; j < 5; j++) {
            y = parseFloat(row.cells[j].innerHTML);
            sum = sum + y;
        }
        var tb = sum / 3;
        row.cells[5].innerHTML = tb.toFixed(2);
        //kiểm tra học sinh giỏi
        if( tb.toFixed(3)>=8){
            row.style.backgroundColor="red";
        }

    }
}