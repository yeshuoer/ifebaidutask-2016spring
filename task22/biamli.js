var root = document.getElementsByClassName('root')[0];
var list = [];
var timer = null;

//中序遍历
function inOrder(node) {
  if (node !== null) {
    inOrder(node.firstElementChild);
    list.push(node);
    inOrder(node.lastElementChild);
  }
}

//前序遍历
var preOrder = function(node) {

};

//后序遍历
var postOrder = function(node) {

};

//事件函数
function changeColor() {
  var i = 0;
  list[i].style.backgroundColor = "#f0f";
  timer = setInterval(function(argument) {
    i++;
    if (i < list.length) {
      list[i - 1].style.backgroundColor = '#fff';
      list[i].style.backgroundColor = '#f0f';
    } else {
      clearInterval(timer);
      list[list.length - 1].style.backgroundColor = '#fff';
    }
  }, 500);
}

//添加按钮
var inBtn = document.getElementById("in");
var preBtn = document.getElementById("pre");
var postBtn = document.getElementById("post");
inBtn.onclick = function() {
  reset();
  inOrder(root);
  changeColor();
};

//初始化样式
function reset() {
  list = [];
  clearInterval(timer);
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '#fff';
  }
}
