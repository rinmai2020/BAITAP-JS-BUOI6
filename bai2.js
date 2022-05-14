function baiTap2() {
  var nhapX = +$("nhapX").value;
  var nhapN = +$("nhapSoN").value;
  var result2 = $("result2");
  result2.style.display = "block";
  result2.style.color = "white";
  var R = 1,
    S = 0;
  for (var i = 1; i <= nhapN; i++) {
    R = R * nhapX;
    S = S + R;
  }
  result2.innerHTML = `Tồng: ${S}`;
}
function $(x) {
  return document.getElementById(x);
}
