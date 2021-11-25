
$(document).ready(function () {
   var i = 0;
   //lấy dữ liệu từ input
   $("#nhap").click(function () {
      var ten = $("#name").val();
      var toan = $("#math").val();
      var ly = $("#physic").val();
      var hoa = $("#chemistry").val();
      var tb = "?";
      if ((ten == "") || (toan == "") || (ly == "") || (hoa == "")) {
         alert("bạn không được để chống dữ liệu")
         return i++;
      }
      //sau khi lấy xong ta xóa đi dữ liệu của vừa nhập vào
      $("#name").val("");
      $("#math").val("");
      $("#physic").val("");
      $("#chemistry").val("");
      //thêm các cột vào bảng 
      i++;
      $("#table").append("<tr><td>" + i + "</td>"
         + "<td>" + ten + "</td>"
         + "<td>" + toan + "</td>"
         + "<td>" + ly + "</td>"
         + "<td>" + hoa + "</td>"
         + "<td>" + tb + "</td>");
   });
   //tính điểm trung bình
   $("#average").click(function () {
      $("#table tr").each(function () {

         var diemtoan = $(this).children("td").eq(2).html();
         var diemly = $(this).children("td").eq(3).html();
         var diemhoa = $(this).children("td").eq(4).html();
         var tb = (parseFloat(diemtoan) + parseFloat(diemly) + parseFloat(diemhoa)) / 3;
         $(this).children("td").eq(5).html(tb.toFixed(2));

      });
   });
   // tô màu cho học sinh giỏi
   $("#classification").click(function () {
      $("#table tr").each(function () {
        hsg= $(this).children("td").eq(5).html();
     
         if ( hsg >= 8) {
            $(this).css("color","red");
         }
      });

   });
});