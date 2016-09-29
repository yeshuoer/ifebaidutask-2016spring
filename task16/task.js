/**
 * Created by Administrator on 2016/9/26.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var city, airindex;
/**
 * 渲染aqi-table表格
 */
var table = document.getElementById('aqi-table');
var addbtn = document.getElementById('add-btn');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
    city = document.getElementById('aqi-city-input').value.trim();
    airindex = document.getElementById('aqi-value-input').value.toString().trim();
    aqiData[city] = airindex;
}

function renderAqiList() {
    var item = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (var x in aqiData) {
        item += '<tr><td>' + x + '</td><td>' + aqiData[x] + '</td><td><button>删除</button></td></tr>';
    }
    table.innerHTML = item;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(x) {
    // do sth.
    delete aqiData[x];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addbtn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

    table.addEventListener('click', function (event) {
        if (event.target.nodeName === 'BUTTON') {
            var x = event.target.parentNode.parentNode.firstChild.textContent;
            delBtnHandle(x);
        }
    })
}

init();
