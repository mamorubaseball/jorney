"use strict";

{
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("panel");

      // このthisはpanelにかかってのか、constructorなのか
      this.img = document.createElement("img");
      this.img.src = "img/1.png";
      // これなんだっけ
      this.timeoutId = undefined;

      section.appendChild(this.img);

      const main = document.querySelector("main");
      main.appendChild(section);
    }
    getRandomImage() {
      const images = [
        "1.png", //道頓堀
        "2.png", //ユニバ
        "3.png", //富士急
        "4.png", //大観峰
        "5.png", //角館 武家屋敷通り
        "6.png", //東京ドイツ
        "7.png", //箱根・芦ノ湖 はなをり
        "8.png", //センター北]
      ];

      var n = Math.random();
      var m = Math.floor(Math.random() * images.length);
      if (n < 0.5) {
        return images[3];
      } else {
        return images[m];
      }
      // return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 10);
    }

    stop() {
      clearTimeout(this.timeoutId);
    }
  }
  // ここでconstructerは終了

  const header = document.querySelector("header");
  const panels = new Panel();
  // const imagenames = [
  //   "道頓堀",
  //   "ユニバ",
  //   "富士急",
  //   "大観峰",
  //   "角館　武家屋敷通り",
  //   "東京ドイツ",
  //   "箱根・芦ノ湖 はなをり",
  //   "センター北",
  // ];

  const spin = document.getElementById("spin");
  var firstclick = true;
  spin.addEventListener("click", () => {
    if (firstclick) {
      firstclick = false;
      panels.spin();
      spin.textContent = "ここに決めた！";
      header.textContent = "旅行行こうよ";
    } else {
      panels.stop();
      header.textContent = "就活お疲れ様！！";
      firstclick = true;
      spin.textContent = "旅行行こうよ";
    }
  });
}
//const kantou = document.getElementsByClassName("kantou");
// const kansai = document.getElementsByClassName("kansai");
// const ja = document.getElementsByClassName("ja");

//kantou.addEventListener("click", () => {
//kantou.classList.add("color");
//});
// kansai.addEventListener("click", () => {
// kansai.classList.add("color");
// });
// ja.addEventListener("click", () => {
// ja.classList.add("color");
// });

// 角館 武家屋敷通り
// 東京ドイツ村
// 箱根・芦ノ湖 はなをり
// センター北
// 大観峰
// 道頓堀
// 富士急
// ユニバ
