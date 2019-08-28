window.onload = function () {
  
  let navs = document.querySelectorAll(".nava");
  let spans = document.querySelectorAll(".nava+span");
  let cr = document.querySelectorAll(".content-right");
  let tl = document.querySelector(".top span");
 
  navs[0].onclick = function () {
    this.className = "nava active";
    navs[1].className = "nava";
    cr[0].className = "content-right active fl";
    cr[1].className = "content-right fl";
    spans[0].className = "active";
    spans[1].className = "";
    tl.innerHTML = "发展历程";
  }
  navs[1].onclick = function () {
    this.className = "nava active";
    navs[0].className = "nava";
    cr[1].className = "content-right active fl";
    cr[0].className = "content-right fl";
    spans[1].className = "active";
    spans[0].className = "";
    tl.innerHTML = "品牌简介";
  }























}