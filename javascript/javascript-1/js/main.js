function notify() {
  //hiển thị lời chào đầu tiên trong javascript
  alert('Chào bạn đến với dự án đầu tiên của javascript');
  //khai báo biến va yêu cầu người dùng nhập thông tin cá nhân vào
  var ten = prompt("Hãy nhập tên của bạn", "");
  var tp = prompt("Hãy nhập thành phố bạn sống", "");
  var sđt = prompt("Hãy nhập số điện thoại của bạn", "");
  var namsinh = prompt("Hãy nhập năm sinh của bạn", "");
  var gmail = prompt("Hãy nhập email của bạn", "");
  var cv = prompt("Hãy nhập công việc của bạn", "");
  var namhientai = new Date().getFullYear();  //Hàm để gọi ra năm hiện tại

  //in ra các thông tin trên màn hình
  document.getElementById("name").innerHTML = "Tên của bạn: " + ten;
  document.getElementById("city").innerHTML = "Thành phố bạn sống: " + tp;
  document.getElementById("mobile").innerHTML = "Số điện thoại của bạn: " + sđt;

  //Nếu năm sinh lớn hơn hoặc bằng năm hiện tại thì yêu cầu người dùng nhập lại!
  while (namsinh >= namhientai) {
    namsinh = prompt("Hãy nhập lại năm sinh của bạn", "");
  }
  var x=tinhtuoi(namsinh);
  document.getElementById("age").innerHTML = "Tuổi của bạn là: " + x;
  document.getElementById("email").innerHTML = "Email của bạn: " + gmail;
  document.getElementById("job").innerHTML = "Công việc của bạn: " + cv;

  //sau khi in ra tất cả các thông tin thì sẽ hiện ra thẻ bước tiếp theo
  document.getElementById("next").style.display = "block";
}
function tinhtuoi(namsinh) {
  var namhientai = new Date().getFullYear();  //Hàm để gọi ra năm hiện tại
  var tuoi = namhientai - namsinh;
  return tuoi;
}



