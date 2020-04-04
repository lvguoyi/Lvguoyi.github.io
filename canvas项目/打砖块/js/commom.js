// js逻辑

// 统一变量
var Width = document.body.clientWidth; //获取屏幕宽度
var Height = document.body.clientHeight - 40; //获取屏幕高度

// 矩形参数
var BricksR;//行数
var BricksC;//列数
var BricksObj = [];//小块数组


// 小球参数
var dx = 0.5;//小球在x轴移动距离
var dy = 5;//小球在y轴移动距离

// 定时器
var iStart;

var Boxnum = 0; //砖块个数

var setTime = 10;//定时器时间

var addTime = 0; //时间累加器
var iSec = iMin = 0;

//关卡
var levenum = 0;//第一关

//判断关卡
if(sessionStorage.levels){
    levenum = Number(sessionStorage.levels)
}else{
    sessionStorage.levels = levenum;
}

//通过设计行数和列控制绘制
BricksR = boxLevel[levenum].length;//行数
BricksC = boxLevel[levenum][0].length / 2;//列数



//键盘变量
var bleftBut = bRightBut = false;

// 图形化数据
// 生成一个8列6行二维数组，数组与方块位置对应
for (var i = 0; i < BricksR; i++) {
    BricksObj[i] = [];
    for (var j = 0; j < BricksC; j++) {
        BricksObj[i][j] = boxLevel[levenum][i].substr(2*j,2); //两个空格
        if(boxLevel[levenum][i].substr(2*j,2) !="  "){
            Boxnum++; // 每个砖块循环时候砖块加一
        }
       
    }
}



console.log(BricksObj);


// 创建画布
var canvas = CanvasInfo.canvas({
    idName: "mycanvas",
    w: Width,
    h: Height,
    border: "0px"
})

// 创建小球
var Ball = new Rects({
    canvas,
    x: Width / 2,
    y: Height - 100 - 10, // 总高度减一百减半径
    r: 10,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    fillStyle: "#007AAE",
    strokeStyle: "#007AAE"
})


// 创建滑块
var Padd = new Rects({
    canvas,
    x: Width / 2 - 60, //宽度一半减滑块宽度一半
    y: Height - 100,
    w: 120,
    h: 20,
    src: "images/padd.png"
})

//提前实例化图片对象
Padd.localImage()


// 清除画布
function clears() {
    canvas.clearRect(0, 0, Width, Height);
    canvas.fillStyle = "#C8EBFA";
    canvas.fillRect(0, 0, Width, Height);
}

// 画布绘制方法
function drawScene() {

    // 每一次清除画布
    clears();

    // 改变小球对象坐标参数
    Ball.x += dx;
    Ball.y += dy;

    // 绘制小球
    Ball.arc();


    //判断滑块运动
    if(bRightBut && Padd.x < Width - Padd.w){
        Padd.x += 8;
    }else if(bleftBut && Padd.x > 0){
        Padd.x -=8;
    }
    // 绘制滑块
    Padd.image();
    //滑块移动
    // document.onkeydown = (event) => {
    //     var event = event || window.event
    //     // console.log(event.keyCode)
    //     var Code = event.keyCode;
    //     if (Code == 37) {
    //         Padd.x -= 20;
    //         Padd.x = Padd.x < 0 ? 0 : Padd.x
    //     }
    //     if (Code == 39) {
    //         Padd.x += 20;
    //         Padd.x = Padd.x > Width-120 ? Width-120 : Padd.x
    //         console.log(Padd.x)
    //     }
    // }


    // 绘制砖块
    for (var i = 0; i < BricksR; i++) {  //循环行数
        for (let j = 0; j < BricksC; j++) { //循环列数
            //图形化数据中，图形与数据关系连接点
            if (BricksObj[i][j] != "  ") {
                // 创建砖块
                var Bricks = new Rects({
                    canvas,
                    x: Width / BricksC * j,
                    y: 20 * i,
                    w: Width / BricksC,
                    h: 20,
                    fillStyle: boxColor[BricksObj[i][j]], // 获取颜色
                    strokeStyle: "#C8EBFA"
                })
                // 绘制矩形
                Bricks.rect();
            }
        }
    }


    //小球在滑块中的位置
    iRow = Math.floor((Ball.y - Ball.radius)/Bricks.h) // 行的位置
    iCon = Math.floor(Ball.x / Bricks.w) // 列的位置

    //判断小球行的位置，小于行数
    if(iRow < BricksR && BricksObj[iRow][iCon] != "  "){
        BricksObj[iRow][iCon] = "  " //清除小块对应数组的位置
        dy = -dy//小块碰撞到小砖块反向运动
        Boxnum--;//减掉一个砖块
    }

    //判断小球落在滑块的位置
    if(Ball.x > Padd.x && Ball.x < Padd.x + Padd.w){ // 必须满足滑块间位置

        if(Ball.y + dy + Ball.radius > Padd.y){
            //小球在滑块算法
            dy = -dy;
            dx = ((Ball.x - (Padd.x +Padd.w/2)) / Padd.w) * 10
        }

    }

    //小球左右边界的判断
    if(Ball.x + Ball.radius + dx > Width || Ball.x - Ball.radius + dx < 0){
        dx = -dx; // 反向运动
    }
    if(Ball.y - Ball.radius + dy < 0){
        dy = -dy;//顶部判断
    }

    //判断小球超出滑块的位置的时候，游戏结束
    if(Ball.y - Ball.radius > Padd.y + Padd.h){
        alert('游戏结束');
        onplays(0)//停止游戏
    }

    //判断游戏是否胜利
    if(Boxnum == 0){
        if(boxLevel.length == levenum + 1){
            alert('你已经通关了！')
            sessionStorage.levels = 0;
        }else{
            alert('你已经胜利，请进入下一关！！！')
            sessionStorage.levels = levenum + 1;
        }
        onplays(0)
        setTimeout(function(){
            location.href = location.href;
        },1000)
    }

    //游戏信息
    //关卡
    //时间
    //砖块

    
    canvas.font = '14px Verdana';
    canvas.fillStyle = '#fff'
    addTime += setTime;
    addTime += setTime; //1000ms = 1s
    if(addTime >= 1000){
        addTime = 0;
        iSec++;
        iMin = Math.floor(iSec / 60);
        if(iMin == 1){
            iMin++;
            iSec=0;
        }
    }
    canvas.fillText(`第${levenum + 1}关`,Width - 100 , Height - 100)
    canvas.fillText(`时间:${iMin} : ${iSec}`,Width -100 ,Height -70)
    canvas.fillText(`砖块:${Boxnum}`,Width-100,Height - 40)

}





// 定时器

function onplays(numbers) {
    if (numbers == 1) {
        iStart = setInterval(drawScene, setTime);
    } else {
        clearInterval(iStart);
    }
}

window.onkeydown = function(event){
    switch(event.keyCode){
        case 37:
        bleftBut = true;
        break;
        case 39:
        bRightBut = true;
        break;
    }
}

window.onkeyup = function(event){
    switch(event.keyCode){
        case 37:
        bleftBut = false;
        break;
        case 39:
        bRightBut = false;
        break;
    }
}














