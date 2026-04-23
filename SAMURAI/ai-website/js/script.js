// 現在表示している画像のインデックスを管理
let currentIndex = 0;

// スライドショーの画像要素を取得
const images = document.querySelectorAll(".slideshow img");

// 最初の画像を表示
images[currentIndex].style.display = "block";

// 画像を順番に切り替える関数
function changeImage() {
  // 現在の画像を非表示にする
  images[currentIndex].style.display = "none";

  // 次の画像のインデックスを計算（最後なら最初に戻る）
  currentIndex = (currentIndex + 1) % images.length;

  // 次の画像を表示する
  images[currentIndex].style.display = "block";
}

// 3秒ごとにchangeImage関数を実行
setInterval(changeImage, 3000);