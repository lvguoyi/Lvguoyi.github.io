function Banner(ele, option) {
    this.autoplay = option.autoplay;
    this.navshow = option.navshow;
    this.cutshow = option.cutshow;
    this.rowactive = option.rowactive;
    this.autoplayTime = option.autoplayTime || 1000;
    this.banner = document.getElementsByClassName(ele)[0];
    // this.banner = document.getElementsByClassName("banner")[0];
    this.images = this.banner.getElementsByClassName("images")[0];
    this.li = this.images.querySelectorAll("li");
    this.navigation = this.banner.getElementsByClassName("navigation")[0];
    this.span = this.navigation.getElementsByTagName("span");
    this.cut = this.banner.getElementsByClassName("cut")[0];
    this.prev = this.cut.getElementsByClassName("prev")[0];
    this.next = this.cut.getElementsByClassName("next")[0];
    this.index = 0;
    this.count = 0;
    this.timer = null;
    this.foo = false;
    this.Lilength = this.li.length;
    this.ulWidth = this.Lilength * this.bannerWidth;
    this.liWidth = this.ulWidth / this.Lilength;
    this.arr = ["red", "blue", "orange", "pink", "skyblue", "red"]
    this.bannerWidth = option.bannerWidth || 500;
    this.bannerHeight = option.bannerHeight || 300;
    this.animate = function (dom, option) {
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
}
//初始化
Banner.prototype.init = function () {
    this.createNav()
    this.domStyle()
    this.Cut()
    this.mouse()
    this.nav()
    if (this.rowactive) {
        this.row()
    }
}
//设置元素的宽高
Banner.prototype.domStyle = function () {

    this.banner.style.width = this.bannerWidth + "px";
    this.banner.style.height = this.bannerHeight + "px";
    this.images.style.width = this.bannerWidth * parseInt(this.Lilength) + "px";
    this.cut.style.height = 20 + "%"
    this.prev.style.fontSize = 20 + ((this.bannerHeight / 100) - 1) * 10 + "px";
    this.next.style.fontSize = 20 + ((this.bannerHeight / 100) - 1) * 10 + "px"
    for (var i = 0; i < this.Lilength; i++) {
        this.li[i].style.width = this.bannerWidth + "px";
        this.li[i].style.lineHeight = this.bannerHeight + "px"
        this.li[i].style.backgroundColor = this.arr[i]
    }

    if (this.autoplay) {
        this.autoPlay()
    }
    if (!this.navshow) {
        this.navigation.style.display = "none"
    }
    if (!this.cutshow) {
        this.cut.style.display = "none"
    }
}
//for循环生成导航点
Banner.prototype.createNav = function () {
    for (var i = 0; i < this.Lilength - 1; i++) {
        var node = document.createElement('span');
        this.navigation.appendChild(node)
    }
    this.span[0].classList.add("active")
}

//去掉导航点类名
Banner.prototype.removeClass = function () {
    for (var i = 0; i < this.Lilength - 1; i++) {
        this.span[i].classList.remove("active")
    }
}
//自动轮播
Banner.prototype.autoPlay = function () {
    var _this = this
    this.timer = setInterval(function () {
        _this.index++;
        _this.count++;
        if (_this.index >= _this.Lilength) {
            _this.index = 1
            _this.images.style.marginLeft = "0px"
        }
        if (_this.count >= _this.Lilength - 1) {
            _this.count = 0
        }

        _this.removeClass()
        _this.span[_this.count].classList.add("active")
        _this.animate(_this.images, {
            marginLeft: -_this.index * _this.bannerWidth
        })
    }, this.autoplayTime)
}
//切换图片
Banner.prototype.Cut = function () {
    var _this = this;
    //下一张
    this.next.onclick = function () {
        _this.index++;
        _this.count++;
        if (_this.index >= _this.Lilength) {
            _this.index = 1
            _this.images.style.marginLeft = "0px"
        }
        if (_this.count >= _this.Lilength - 1) {
            _this.count = 0
        }
        _this.animate(_this.images, {
            marginLeft: -_this.index * _this.bannerWidth
        })
        _this.removeClass()
        _this.span[_this.count].classList.add("active")
    }

    //上一张

    this.prev.onclick = function () {
        _this.index--;
        _this.count--;
        if (_this.index < 0) {
            _this.index = _this.Lilength - 2
            _this.images.style.marginLeft = -parseInt(_this.Lilength - 1) * _this.bannerWidth + "px"
        }
        _this.animate(_this.images, {
            marginLeft: -_this.index * _this.bannerWidth
        })
        if (_this.count < 0) {
            _this.count = _this.Lilength - 2;
        }
        _this.removeClass()
        _this.span[_this.count].classList.add("active")
    }

}

//鼠标进入,离开
Banner.prototype.mouse = function () {
    var _this = this;
    //鼠标进入
    this.banner.onmouseenter = function () {
        clearInterval(_this.timer)
    }
    //鼠标离开
    this.banner.onmouseleave = function () {
        clearInterval(_this.timer)
        if (_this.autoplay) {
            _this.timer = setInterval(function () {
                _this.index++;
                _this.count++;
                if (_this.index >= _this.Lilength) {
                    _this.index = 1
                    _this.images.style.marginLeft = "0px"
                }
                if (_this.count >= _this.Lilength - 1) {
                    _this.count = 0
                }

                _this.removeClass()
                _this.span[_this.count].classList.add("active")
                _this.animate(_this.images, {
                    marginLeft: -_this.index * _this.bannerWidth
                })
            }, _this.autoplayTime)

        }
    }
}

//导航点
Banner.prototype.nav = function () {
    var _this = this;
    for (var i = 0; i < this.Lilength - 1; i++) {
        this.span[i].num = i
        this.span[i].onclick = function () {
            console.log(this.num)
            _this.index = this.num;
            _this.count = this.num;
            _this.removeClass()
            this.classList.add("active")
            _this.animate(_this.images, {
                marginLeft: -this.num * _this.bannerWidth
            })
        }
    }
}

//划过切换图片
Banner.prototype.row = function () {
    //鼠标按下banner盒子
    var _this = this;
    this.banner.onmousedown = function (event) {
        event.preventDefault();
        var ml = parseInt(window.getComputedStyle(_this.images, null)["marginLeft"])
        var bannerLeft = _this.banner.offsetLeft
        var X1 = event.pageX - bannerLeft;
        _this.foo = true;

        //鼠标在banner盒子里面移动
        _this.banner.onmousemove = function (event) {
            if (_this.foo) {
                var X2 = event.pageX - bannerLeft;
                if ((X1 - X2) < 0) {
                    _this.foo = false;
                    _this.index--;
                    _this.count--;
                    if (_this.index < 0) {
                        _this.index = _this.Lilength - 2
                        _this.images.style.marginLeft = -parseInt(_this.Lilength - 1) * _this.bannerWidth + "px"
                    }
                    _this.animate(_this.images, {
                        marginLeft: -_this.index * _this.bannerWidth
                    })
                    if (_this.count < 0) {
                        _this.count = _this.Lilength - 2;
                    }
                    _this.removeClass()
                    _this.span[_this.count].classList.add("active")
                }

                if ((X1 - X2) > 0) {
                    _this.foo = false;
                    _this.index++;
                    _this.count++;
                    if (_this.index >= _this.Lilength) {
                        _this.index = 1
                        _this.images.style.marginLeft = "0px"
                    }
                    if (_this.count >= _this.Lilength - 1) {
                        _this.count = 0
                    }
                    _this.animate(_this.images, {
                        marginLeft: -_this.index * _this.bannerWidth
                    })
                    _this.removeClass()
                    _this.span[_this.count].classList.add("active")
                }
            }
        }
    }





    //鼠标松开
    this.banner.onmouseup = function () {
        _this.foo = false;
    }


}