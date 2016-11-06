//定义变量
var body = document.getElementsByTagName('body')[0];
var root = document.getElementById('root');
var input = document.getElementsByTagName('input')[0];
var list = [];
var clickedEl = null;
var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName('button')[1];
var btn3 = document.getElementsByTagName('button')[2];
var btn4 = document.getElementsByTagName('button')[3];


//遍历
function depth(node) {
  if (node) {
    for (var i = 0; i < node.children.length; i++) {
      depth(node.children[i]);
    }
    list.push(node);
  }
}


//点击div颜色改变函数
function clickBlue(el) {
  resetColor();
  el.style.backgroundColor = "blue";
}


//动画
function show() {
  var i = 0;
  list[i].style.backgroundColor = "red";
  var timer = setInterval(function() {
    i++;
    if (i < list.length) {
      list[i - 1].style.backgroundColor = "white";
      list[i].style.backgroundColor = "red";
    } else {
      list[i - 1].style.backgroundColor = "white";
      clearInterval(timer);
    }
  }, 700);
}


//查询事件函数
function query() {
  var inputValue = input.value.trim();
  var i = 0;
  if (list[i].firstChild.nodeValue.trim() === inputValue) {
    list[i].style.backgroundColor = "blue";
  } else {
    list[i].style.backgroundColor = "red";
    var timer = setInterval(function() {
      i++;
      if (i < list.length) {
        if (list[i].firstChild.nodeValue.trim() === inputValue) {
          list[i - 1].style.backgroundColor = "white";
          list[i].style.backgroundColor = "blue";
          clearInterval(timer);
        } else {
          list[i - 1].style.backgroundColor = "white";
          list[i].style.backgroundColor = "red";
        }
      } else {
        list[i - 1].style.backgroundColor = "white";
        clearInterval(timer);
      }
    }, 1000);
  }
}

//增加元素函数
function add() {
  if (clickedEl) {
    var newEl = document.createElement("div");
    var content = document.createTextNode(input.value.trim());
    newEl.appendChild(content);
    clickedEl.appendChild(newEl);
    clickedEl = newEl;
    depth(root);
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener('click', function(e) {
        resetColor();
        this.style.backgroundColor = "blue";
        e.stopPropagation();
      });
    }
  }
}

//重置函数
function reset() {
  for (var i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "white";
  }
  list = [];
}

function resetColor() {
  for (var i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "white";
  }
}
//查询按钮
btn1.onclick = function() {
  reset();
  depth(root);
  query();
};


//遍历按钮
btn2.onclick = function() {
  reset();
  depth(root);
  show();
};


//增加按钮

btn3.addEventListener('click', add, false);

//删除按钮
btn4.addEventListener('click', function(e) {
  clickedEl.parentNode.removeChild(clickedEl);
  if (root) {
    reset();
    depth(root);
  }
  e.stopPropagation();
}, false);


//鼠标点击节点变颜色事件
depth(root);
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(e) {
    reset();
    depth(root);
    this.style.backgroundColor = "blue";
    clickedEl = this;
    e.stopPropagation();
  });
}
reset();
