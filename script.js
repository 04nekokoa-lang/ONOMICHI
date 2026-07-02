const topButton = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topButton.classList.remove('hide'); // 400px以上スクロールしたらhide（透明）を消す
    } else {
        topButton.classList.add('hide');    // 上に戻ったらまたhide（透明）をつける
    }
});