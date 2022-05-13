function baiTap4() {
  var result4 = $("result4");
  result4.style.display = "block";
  var content = "";
  for (var i = 1; i <= 10; i++) {
    var oddDiv = `<div style="background-color:blue;color: white;">Lẻ</div>`;
    var evenDiv = `<div style="background-color:red;color: white;">chẳn</div>`;
    if (i % 2 === 0) {
      content += evenDiv;
    } else {
      content += oddDiv;
    }
  }
  result4.innerHTML = content;
}
function $(x) {
  return document.getElementById(x);
}
