
var lis2 = document.querySelectorAll('.bott ul li.a')
var hua = document.querySelector('.hua')







function animate(dom, option) {
    // 2.0 首先清除定时器
    clearInterval(dom.timer);
    // 3.0 执行定时器函数
    dom.timer = setInterval(function () {
        // 4.0 定义一个布尔值
        var bool = true;
        // 5.0 循环
        for (var k in option) {
            // 5.0.1 获取目标属性值
            // k ----- > width
            // option[k] ---- > 100px
            // 5.0.2 目标属性值
            var target = parseInt(option[k]);
            // 5.0.3 当前的属性值 100px
            //  100
            var current = parseInt(getComputedStyle(dom, null)[k]);
            // 5.0.4 步长
            var speed = (target - current) / 5;
            // 5.0.5 处理步长 出现的小数点  0.1 === 1 /-0.1 ===> -1
            // 
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // console.log({
            //     speed:speed
            // })
            // 步长
            // 5.0.6 判断 只要有一个属性没达到目标值 就设置bool为false 
            // 如果bool这个变量的值为false ,那么定时器就不会停止
            if (current != target) {
                // 设置布尔值 为 false 
                bool = false;
            }
            //5.0.7 设置dom元素的样式
            dom.style[k] = current + speed + "px";
        }
        // 6.0 当所有的属性达到目标值  bool 为 true 
        if (bool) {
            //
            // console.log("test")
            // 6.0.1 停止定时器函数
            clearInterval(dom.timer);
            // 6.0.2 终止程序
            return;
        }
    }, 30)
}



for (let i = 0; i < lis2.length; i++) {
    lis2[i].onmouseenter = function () {
        hua.style.left = 82 * i + 'px'
        console.log(i)

    }
}
for (let j = 0; j < lis2.length; j++) {
    lis2[j].onmouseleave = function () {
        var leftt = parseInt(getComputedStyle(hua, null)['left'])
        if (leftt > 0) {
            hua.style.left = 0 + 'px'
        }
        console.log(leftt)
    }

}


var btn = document.getElementsByClassName("btn")[0];

// 定义全局的变量
var current = 0;
var target = 0;
var timer = null;

// 2.0 滚动事件
window.onscroll = function () {
    // 3.0 获取页面超出浏览器顶部的距离 scrollTop
    var ttop = document.documentElement.scrollTop || document.body.scrollTop;
    // 4.0 判断
    if (ttop > 100) {
        // 5.0 显示按钮
        btn.style.display = "block";
    } else {
        // 6.0 隐藏按钮
        btn.style.display = "none";
    }
    // 获取页面滚动的位置
    current = ttop;
    // var aa = btn.offsetTop
    // btn.style.top = ttop + aa +'px'
}

// 点击事件
btn.onclick = function () {
    // 清除定时器
    clearInterval(timer);
    // 执行定时器函数
    timer = setInterval(function () {
        // 计算 步长
        var speed = (target - current) / 5;
        // console.log(target);

        // 处理小数点
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        // 滚动页面到指定位置
        window.scrollTo(0, current);
        // 目标值  = 当前值 + 步长
        current = current + speed;
        console.log("speed --- > ", speed)
        // 判断 页面是否返回顶部
        if (speed == 0) {
            // 清除定时器
            clearInterval(timer);
            // console.log("test")
        }
    }, 30);
}