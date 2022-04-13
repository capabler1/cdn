var a = document.title;
function hello() {

    document.title = a;
}
window.onload = function () {
    var a = document.title;
};
window.onblur = function () {
    document.title = "回来qwq";
};
window.onfocus = function () {
    document.title = "嘿嘿(●ˇ∀ˇ●)";
    setTimeout(hello, 1000);
    // window.clearTimeout(t1);
}
