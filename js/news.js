window.onload = function () {

  let btns = document.querySelectorAll(".btns .number");
  let news = document.querySelectorAll(".news");
  let words = document.querySelectorAll(".word");
  let more = document.querySelector(".more");
  let ul = document.querySelector(".btns");
  let items = document.querySelectorAll("news-item");
  for (let i = 6; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
  function no() {
    if (btns[0].className == "number active") {
      words[0].className = "word disabled";
      words[1].className = "word disabled";
      words[2].className = "word";
      words[3].className = "word";
    } else if (btns[11].className == "number active") {
      words[0].className = "word";
      words[1].className = "word";
      words[2].className = "word disabled";
      words[3].className = "word disabled";
    } else {
      words[0].className = "word";
      words[1].className = "word";
      words[2].className = "word";
      words[3].className = "word";
    } 
 }
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
      for (let i = 0; i < btns.length; i++) {
        btns[i].className = "number";
        news[i].className = "news cw";
      }
      this.className = "number active";
      let j = this.innerHTML - 1;
      news[j].className = "news cw active";
      no();
    }
  }
  function show1() {
    for (let i = 0; i < 6; i++) {
      btns[i].style.display = "none";
    }
    for (let i = 6; i < btns.length; i++) {
      btns[i].style.display = "inline-block";
    }
  }
  function show2() {
    for (let i = 6; i < btns.length; i++) {
      btns[i].style.display = "none";
    }
    for (let i = 0; i < 6; i++) {
      btns[i].style.display = "inline-block";
    }
  }
  more.onclick = function () {
    if (this.nextElementSibling.style.display == "none") {
      show1();
    } else {
      show2();
    }
  };
  no();
  for (let i = 0; i < words.length; i++) {
    words[i].onclick = function () {
      let ac = ul.getElementsByClassName("active")[0];
      for (let i = 0; i < btns.length; i++) {
        btns[i].className = "number";
        news[i].className = "news cw";
      };
      if (this.innerHTML == "首页") {
        show2();
        btns[0].className = "number active";
        news[0].className = "news cw active";
      } else if (this.innerHTML == "尾页") {
        show1();
        btns[11].className = "number active";
        news[11].className = "news cw active";
      } else if (this.innerHTML == "上页") { 
          let n =Number(ac.innerHTML);
          if (ac.innerHTML == 7) {
            show2();
          }
          news[n - 2].className = "news cw active";
          btns[n - 2].className = "number active";
          news[n - 1].className = "news cw";
          btns[n - 1].className = "number";
      } else if (this.innerHTML == "下页") {
        let n = Number(ac.innerHTML);
        if (ac.innerHTML == 6) {
          show1();
        }
        news[n].className = "news cw active";
        btns[n].className = "number active";
        news[n - 1].className = "news cw";
        btns[n - 1].className = "number";
      }
      no();
  }
}

for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    
  }
}

/* news-1 */
  























}