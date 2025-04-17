// ヘッダー読み込み
fetch('header.html')
	.then(res => res.text())
	.then(data => {
		document.getElementById('header').innerHTML = data;
	});

// フッター読み込み
fetch('footer.html')
	.then(res => res.text())
	.then(data => {
		document.getElementById('footer').innerHTML = data;
	});

// アイコン動かす
document.addEventListener('DOMContentLoaded', function () {
  const icon = document.getElementById('dog-icon');

  icon.addEventListener('click', function () {
    icon.classList.toggle('move'); // クラスの付け外しで動きを制御
  });
});

