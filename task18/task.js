var input = document.getElementsByTagName('input')[0];
var ul = document.getElementsByTagName('ul')[0];
var buttons = document.getElementsByTagName('button');

buttons[0].onclick = function () {
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.insertBefore(li, ul.firstChild);
    li.onclick=function () {
        ul.removeChild(this);
    }
};
buttons[1].onclick = function () {
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    li.onclick=function () {
        ul.removeChild(this);
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
