function baiTap3() {
  var n = +$("nhapN").value;
  var result3 = $("result3");
  // var tinhFactorial = factorialCl(n);
  result3.style.display = "block";
  result3.style.color = "white";
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  result3.innerHTML = `Giai thừa: ${factorial}`;
}
// function factorialCl(n) {
//   var factorial = 1;
//   if (n === 0 || n === 1) {
//     return factorial;
//   } else {
//     for (var i = n; i >= 1; i--) {
//       factorial = factorial * i;
//     }
//     return factorial;
//   }
// }
function $(x) {
  return document.getElementById(x);
}
