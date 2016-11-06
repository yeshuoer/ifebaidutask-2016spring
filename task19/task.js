var input = document.getElementsByTagName('input')[0];
var ul = document.getElementsByTagName('ul')[0];
var buttons = document.getElementsByTagName('button');

buttons[0].onclick = function () {
    var li = document.createElement('li');
    var value = input.value;
    var reg = /^[1-9][0-9]$|^100$/;
    if (reg.test(value) === false) {
        alert('请输入10-100之间的数字！');
    } else {
        li.innerHTML = value;
        var v = value * 2;
        li.style.height = v + 'px';
        ul.insertBefore(li, ul.firstChild);
        li.onclick = function () {
            ul.removeChild(this);
        }
    }
};
buttons[1].onclick = function () {
    var li = document.createElement('li');
    var value = input.value;
    var reg = /^[1-9][0-9]$|^100$/;
    if (reg.test(value) === false) {
        alert('请输入10-100之间的数字！');
    } else {
        li.innerHTML = value;
        var v = input.value * 2;
        li.style.height = v + 'px';
        ul.appendChild(li);
        li.onclick = function () {
            ul.removeChild(this);
        }
    }
};
buttons[2].onclick = function () {
    var first = ul.firstChild.innerHTML;
    ul.removeChild(ul.firstChild);
    alert(first);
};
buttons[3].onclick = function () {
    var last = ul.lastChild.innerHTML;
    ul.removeChild(ul.lastChild);
    alert(last);
};

buttons[4].onclick = function () {
    for (var i = 0; i < ul.children.length - 1; i++) {
        for (var j = 0; j < ul.children.length - 1 - i; j++) {
            if (ul.children[j].innerHTML > ul.children[j + 1].innerHTML) {
                var temp;
                temp = ul.children[j].innerHTML;
                ul.children[j].innerHTML = ul.children[j + 1].innerHTML;
                ul.children[j + 1].innerHTML = temp;
                ul.children[j].style.height = ul.children[j].innerHTML * 2 + 'px';
                ul.children[j + 1].style.height = ul.children[j + 1].innerHTML * 2 + 'px';
            }
        }
    }
};
