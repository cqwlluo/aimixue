window.onload = function () {
  var slider = document.querySelector(".slider");
  var imgs = slider.getElementsByTagName("img");
  var lis = document.querySelectorAll(".slc");
  var j = 0;

  function sl() {
    if (j == 3) {
      j = 0;
    }
    for (var i = 0; i < imgs.length - 1; i++) {
      lis[i].className = "slc";
      imgs[i].className = "";
    }
    imgs[j].className = "active";
    lis[j].className = "slc active";
    j++;
  }
  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = "slc";
        imgs[i].className = "";
      };
      var k = parseInt(this.getAttribute("od"));
      j = k;
      this.className = "slc active";
      imgs[k].className = "active";
    }
  }
  var timer = setInterval(() => sl(), 2000);
  slider.onmouseover = function () {
    clearInterval(timer);
  }
  slider.onmouseout = function () {
  timer = setInterval(() => sl(), 2000);
  }


/* member */
  let dt = document.querySelector(".dt");
  dt.onmouseover = function (e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName == "IMG" || target.nodeName == "SPAN" || target.nodeName == "P") {
      let nodes = target.parentNode.children;
      nodes[0].style.display = "none";
      nodes[1].style.display = "block";
      nodes[2].style.color = "#e05244";
    }
  }
  dt.onmouseout = function (e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName == "IMG" || target.nodeName == "SPAN" || target.nodeName == "P") {
      let nodes = target.parentNode.children;
      nodes[0].style.display = "block";
      nodes[1].style.display = "none";
      nodes[2].style.color = "#333";
    }
  }












}