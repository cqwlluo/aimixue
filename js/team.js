let cr = document.querySelectorAll(".content-right");
let navs = document.querySelectorAll(".nava");
let spans = document.querySelectorAll(".nava+span");
let tl = document.querySelector(".top span");

for (var i = 0; i < cr.length; i++) {
  navs[i].onclick = function () {
    for (var i = 0; i < cr.length; i++) {
      cr[i].className = "content-right fl";
      navs[i].className = "nava";
      spans[i].className = "";
    }
    var j = this.getAttribute("od");
    this.className = "nava active";
    cr[j].className = "content-right active fl";
    spans[j].className = "active";
    tl.innerHTML = this.innerHTML;
  }
}

/* buttons */
let main = document.querySelector("main");
main.onclick = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.nodeName == "BUTTON") {
    var p = target.parentNode.previousElementSibling.children[0];
    if (target.innerHTML == "&gt;") {
      target.previousElementSibling.className = "num active";
    
      target.previousElementSibling.previousElementSibling.className = "num";
    
      p.style.marginLeft = "-1068px";
      
    } else {
      target.nextElementSibling.className = "num active";
      target.nextElementSibling.nextElementSibling.className = "num";
      p.style.marginLeft = "0";
    }
  }
}
