var $ = function (el) {
    return document.querySelector(el);
};
var data = [];

$('#insert').onclick = function () {
    var reg = /[^\w\u4e00-\u9fa5]+/;
    data = data.concat($('#input').value.trim().split(reg));
    render();
};

$('#search').onclick = function () {
    var str = $('input').value;
    render(str);
};

function render(str) {
    $('ul').innerHTML = data.map(function (v) {
        if (str != null) {
            var reg = new RegExp(str);
            v = v.replace(reg, '<span>' + str + '</span>');
        }
        return '<li>' + v + '</li>';
    }).join('');
}




