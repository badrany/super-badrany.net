// إخفاء شاشة التحميل ب  5 ثواني
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // 3 ثواني
});
