document.addEventListener('DOMContentLoaded', function () {
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
  const icon = document.getElementById('dog-icon');
  if (icon) {
    icon.addEventListener('click', function () {
      icon.classList.toggle('move');
    });
  }
});

