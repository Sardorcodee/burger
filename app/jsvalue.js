let produc = [
  {
    narxi: 4,
  },
  {
    narxi: 3,
  },
  {
    narxi: 5,
  },
];
let a = document.querySelector(".h1");
let aa = document.querySelector(".h2");
let aaa = document.querySelector(".h3");
let aaaa = document.querySelector(".h4");
let aaaaa = document.querySelector(".h6");
let tot = document.querySelector(".total");
let total = 0;
function Meat() {
  produc.forEach(function (p, index) {
    let text = `<img onclick="del1()" class="f6 col-12 gape" src="/img/meat.svg" alt="" />`;

    let narxi = p.narxi;
    if (narxi === 4) {
      aaaaa.innerHTML += text;
      return;
    }
  });
  total += 4;
  tot.textContent = `Narxi: $${total}`;
}
function Tomato() {
  produc.forEach(function (p, index) {
    let text = ` <img onclick="del5()"  class="f5 col-12 gape"src="/img/tomato.svg" alt="" />`;

    let narxi = p.narxi;
    if (narxi === 4) {
      aaaa.innerHTML += text;
      return;
    }
  });
  total += 2;
  tot.textContent = `Narxi: $${total}`;
}
function Pickle() {
  produc.forEach(function (p, index) {
    let text = ` <img onclick="del4()" class="f4 col-12 gape" src="/img/pickle.svg" alt="" />`;

    let narxi = p.narxi;
    if (narxi === 4) {
      aaa.innerHTML += text;
      return;
    }
  });
  total += 2;
  tot.textContent = `Narxi: $${total}`;
}

function Onion() {
  produc.forEach(function (p, index) {
    let text = ` <img onclick="del3()" class="f3 col-12 gape" src="/img/onion.svg" alt="" />`;

    let narxi = p.narxi;
    if (narxi === 4) {
      aa.innerHTML += text;
      return;
    }
  });
  total += 3;
  tot.textContent = `Narxi: $${total}`;
}
function Cheese() {
  produc.forEach(function (p, index) {
    let text = ` <img onclick="del2()" class="f2 col-12" src="/img/cheese.svg" alt="" />`;

    let narxi = p.narxi;
    if (narxi === 4) {
      a.innerHTML += text;
      return;
    }
  });
  total += 5;
  tot.textContent = `Narxi: $${total}`;
}
function del1() {
  aaaaa.innerHTML = "";
}
function del2() {
  a.innerHTML = "";
}
function del3() {
  aa.innerHTML = "";
}
function del4() {
  aaa.innerHTML = "";
}
function del5() {
  aaaa.innerHTML = "";
}

function Buyurtma() {
  confirm(`Buyutrmangiz 5-daqiqa ichida tayyor buladi.
     Narxi: $${total}`);
}
function Qayta() {
  confirm("Haqiqatdan qayta topshirasizmi?");
  if (true) {
    window.location.reload();
  } else {
  }
}
