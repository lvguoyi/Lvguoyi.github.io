window.onload = function () {
        //1.0 构造函数
        // 定义Snake 对象
        function Snake(option){ // 此处option是形参
            // this  是系统产生的一个空对象
            // this 就是 就是 就是 一个对象
            //2.0 添加属性 
            this.map = option.map;
            // 宽度
            this.width = option.width;
            // 高度
            this.height = option.height;
            // 大小
            this.size = option.size;
            // 多少行
            this.row = this.height / this.size; // 动态计算多少30行
            // 多少列
            this.column = this.width / this.size ;
            // 坐标（蛇）
            // 第0行
            this.y = 0;
            // 第2列
            this.x = 2;
            // 方移动方向
            this.direction = "right";
            // 坐标（食物）
            this.foodY = 10;
            this.foodX = 10;
            // 定时器函数
            this.timer = null;
            // 分数
            this.score = 0;
            // 数组(大数组) 记录所有li标签
            this.elements = []
            // 记录蛇的身体
            this.snakeBody = [];
            // 设置map标签的宽度高度
            this.map.style.width = option.width + "px";
            this.map.style.height = option.height + "px";
            // 定义布尔值  防止频繁改变方向
            this.isChange =  true;
            // 添加毫秒值
            this.millSeconds = 300;
            // 显示分数
            this.score = option.score;
            //分数
            this.count = 0;
            // ... 
        }

        // 3.0 利用构造函数 添加方法 创建地图
        Snake.prototype.createMap = function(){
            // 循环 创建行
            for(var i = 0 ; i < this.row ; i ++){
                // 创建ul标签
                var ulCreate =  document.createElement("ul");
                // 设置ul标签的高度  this.size
                ulCreate.style.height = this.size +"px";
                // 定义数组 存放每一行li标签
                var arr = [];
                // 每次循环创建列
                for(var j = 0 ; j < this.column ; j++){
                    //创建li标签 
                    var liCreate = document.createElement("li");
                    //设置li标签的宽度高度
                    liCreate.style.width = (this.size - 2) + "px";
                    liCreate.style.height = (this.size - 2) + "px";
                    // 往ul标签添加li标签
                    ulCreate.appendChild(liCreate);
                    // 往arr数组添加li标签
                    arr.push(liCreate)
                }
                //往map标签添加ul标签
                this.map.appendChild(ulCreate);
                //往大数组添加小数组 
                this.elements.push(arr);
            }
            // console.log(this.elements)
        }
        // 4.0 利用构造函数 添加方法 创建蛇
        Snake.prototype.createSnake = function(){
            // 4.0.1 循环
            for(var i = 0  ; i < 3; i ++ ){
                //4.0.2 第一行前3个li标签 设置类名
                this.elements[0][i].className = "snake";
                //4.0.3 把第一行前3个li标签 添加到snakeBody
                this.snakeBody.push(this.elements[0][i]);
            }
            console.log(this.snakeBody)
        }
        // 5.0 利用构造函数 添加方法 创建食物
        Snake.prototype.createFood = function(){
            // 5.0.1 产生食物的坐标
            this.foodX = this.random(this.column , 0);
            this.foodY = this.random(this.row , 0);
            //5.0.2 判断
            if(this.elements[this.foodY][this.foodX].className =="snake"){
                // 5.0.3 重新创建食物
                this.createFood();
            }else {
                //5.0.4 设置食物的类名
                this.elements[this.foodY][this.foodX].className = "egg";
            }
        }
        // 6.0 利用构造函数 添加方法 监听键盘事件 改变direction
        Snake.prototype.addEvent = function(){
            // 记录this 构造函数产生的对象
            var _this = this;
            // 按下键盘事件
            document.onkeydown = function(event){
                // 键值码
                var keyCode = event.keyCode;
                console.log(keyCode)
                // 按下 "S" 按键 keyCode == 83 游戏开始
                if(keyCode == 83){
                    // 调用蛇移动函数
                    _this.snakeMove();
                }
                // 按下 "P" 按键 keyCode ==80 游戏暂停
                if(keyCode == 80){
                    // 停止定时器函数
                    clearInterval(_this.timer);
                    // 终止代码
                    return;
                }
                // keyCode ==  40   向下
                // keyCode ==  38   向上
                // keyCode ==  37   向左
                // keyCode ==  39   向右
                // this ====> document 事件的调用者 
                if(!_this.isChange){
                    //终止程序
                    return ;
                }
                // 例如：蛇往右边移动，禁止再按下左边箭头按键 && 且
                if(_this.direction == "right" && keyCode == 37){
                    return ;
                }
                if(_this.direction == "left" && keyCode == 39){
                    return ;
                }
                if(_this.direction == "down" && keyCode == 38){
                    return ;
                }
                if(_this.direction == "up" && keyCode == 40){
                    return ;
                }
                //改变蛇移动方向 direction
                if(keyCode == 39){
                    // 给direction赋值 向右
                    _this.direction = "right";
                    // 设置布尔值为false
                    _this.isChange = false;
                }
                if(keyCode == 37){
                    // 给direction赋值 向左
                    _this.direction = "left";
                    // 设置布尔值为false
                    _this.isChange = false;
                }
                if(keyCode == 40){
                    // 给direction赋值 向下
                    _this.direction = "down";
                    // 设置布尔值为false
                    _this.isChange = false;
                }
                if(keyCode == 38){
                    // 给direction赋值 向右
                    _this.direction = "up";
                    // 设置布尔值为false
                    _this.isChange = false;
                }
                // console.log(_this.direction)
                // 延迟函数
                setTimeout(function(){
                    // 延迟300毫秒 设置布尔值为true 
                    _this.isChange = true;
                },_this.millSeconds)
            }
        }

        // 7.0 利用构造函数 添加方法 蛇移动的处理
        Snake.prototype.move = function(){
            // 控制流语句
            switch(this.direction){
                case "right" : // 往右边移动
                        this.x ++;
                    break;

                case "left" : // 往左边移动
                        this.x --;
                    break;
                case "down" : // 往下边移动
                    this.y ++;
                    break;

                case "up" : // 往上边移动
                    this.y --;
                    break;
            }

            // 判断蛇是否超出活动范围
            if(this.x < 0 || this.x > (this.column-1) || this.y < 0 || this.y > (this.row-1)){
                // 停止定时器
                clearInterval(this.timer);
                //提示
                alert('超出活动范围了');
                // 终止代码
                return;
            }
            // 判断蛇头和身体是否碰撞了
            for(var i = 0 ; i < this.snakeBody.length ; i++){
                //检测 蛇头和身体碰撞
                if(this.elements[this.y][this.x] == this.snakeBody[i]){
                    // 停止定时器
                    clearInterval(this.timer);
                    // 提示
                    alert("踩到自己了");
                    // 终止代码
                    return;
                }
            }

            // 判断蛇是否吃到食物了(检测碰撞)
            if(this.x == this.foodX && this.y == this.foodY){
                // 设置食物标签为蛇身体 类名为snake
                this.elements[this.foodY][this.foodX].className = "snake";
                // 往蛇数组添加一个li标签
                this.snakeBody.push(this.elements[this.foodY][this.foodX]);
                //重新创建食物
                this.createFood();
                //设置分数
                this.count +=1;
                // 显示分数
                this.score.innerText = this.count;
            }else {
                // 把蛇数组第一个元素的背景色移除
                this.snakeBody[0].className = "";
                // 把蛇数组第一个元素删掉
                this.snakeBody.shift();
                // 把坐标对应的li标签设置为蓝色
                this.elements[this.y][this.x].className="snake";
                // 把坐标对应的li标签添加到蛇数组里 
                this.snakeBody.push(this.elements[this.y][this.x]);
            }
        }

        // 8.0 利用构造函数 添加方法 蛇运动函数
        Snake.prototype.snakeMove = function(){
            // 记录this
            var _this = this;
            // 执行定时器函数
            this.timer = setInterval(function(){
                //调用原型对象上的move函数
                _this.move();
            },this.millSeconds);
        }
       

        // 6.0 利用构造函数 添加方法 产生随机数函数
        Snake.prototype.random = function(max , min){
            //返回一个指定范围的随机数 10 - 50
            return Math.floor(Math.random()*(max-min)+min);
        }

        // 3.0 利用构造函数 添加方法 初始化
        Snake.prototype.init = function(){
            // 创建地图
            this.createMap();
            // 创建蛇
            this.createSnake();
            // 创建食物
            this.createFood();
            // 监听键盘事件
            this.addEvent();
            // 调用蛇运动函数
            // this.snakeMove();
            //...
        }



       
        // 储存数据的对象
        // var obj = {
        //     map:document.getElementById("mapId"),
        //     width:600,
        //     height:600,
        //     size:30
        // }
         // 创建实例对象  
        var snake = new Snake({
            map:document.getElementById("mapId"),
            score:document.getElementById("score"),
            width:600,
            height:600,
            size:30
        }); 
        // console.log(snake);
        // 调用原型对象上的init方法
        snake.init();

}