document.addEventListener('DOMContentLoaded', function () {
  const icon = document.getElementById('dog-icon');

  icon.addEventListener('click', function () {
    icon.classList.toggle('move'); // クラスの付け外しで動きを制御
  });
});

