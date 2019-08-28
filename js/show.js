/* 左侧 */
let navs = document.querySelectorAll(".nava");
let spans = document.querySelectorAll(".nava+span");
let cr = document.querySelectorAll(".content-right");
let tl = document.querySelector(".top span");

for (var i = 0; i < navs.length; i++) {
  navs[i].onclick = function () {
    for (var i = 0; i < navs.length; i++) {
      navs[i].className = "nava";
      cr[i].className = "content-right fl";
      spans[i].className = "";
    }
    var j = this.getAttribute("od");
    this.className = "nava active";
    cr[j].className = "content-right active fl";
    spans[j].className = "active";
    tl.innerHTML = this.innerText;
  }
}

/* 下面图片效果 */
let names = document.querySelectorAll(".box span");
let show = document.querySelector(".content");
for (var i = 0; i < names.length; i++){
  names[i].innerHTML = names[i].parentNode.parentNode.nextElementSibling.innerHTML;
}