
class Rect {

    constructor(option) {
        //x轴坐标
        this.x = option.x || 0;
        //y轴坐标
        this.y = option.y || 0;
        //宽度
        this.w = option.w || 0;
        //高度
        this.h = option.h || 0;
        //颜色填充
        this.fillStyle = option.fillStyle || "#C8EFD4";
        //边框颜色
        this.strokeStyle = option.strokeStyle || "red";
        //透明度
        this.opacity = option.opacity || 1;
        //圆的半径
        this.radius = option.r || 0;
        //起始弧度
        this.startAngle = option.startAngle || 0;
        //结束弧度
        this.endAngle = option.endAngle;
        //画圆方向
        this.anticlockwise = option.anticlockwise || false;
        //x轴位移
        this.translateX = option.translateX || 0;
        //y轴位移
        this.translateY = option.translateY || 0;
        //x轴缩放
        this.scaleX = option.scaleX || 1;
        //y轴缩放
        this.scaleY = option.scaleY || 1;
        //旋转
        this.rotate = option.rotate || 0;
        //判断画圆是否闭合
        this.moveTo = option.moveTo || false;
        this.ctx = option.canvas; // canvas对象

        //图片路径
        this.src = option.src;
        //开始剪切的 x 坐标位置
        this.sx = option.sx || null;
        //开始剪切的 y 坐标位置
        this.sy = option.sy;
        //被剪切图像的宽度
        this.sw = option.sw;
        //被剪切图像的高度
        this.sh = option.sh;
    }

    header() {
        this.ctx.save();//保存状态
        // 绘制图形
        this.ctx.beginPath(); //初始化绘制

        this.ctx.translate(this.translateX, this.translateY);//位移
        this.ctx.scale(this.scaleX, this.scaleY);//缩放
        this.ctx.rotate(this.rotate * Math.PI / 180);//旋转
    }


    arcs() {
        if (this.moveTo) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
        } else {
            this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
        }
    }
    rects() {
        // 绘制矩形
        this.ctx.rect(this.x, this.y, this.w, this.h);
    }
    image() {
        var imgs = new Image();
        imgs.src = this.src;
        var _this = this;
        imgs.onload = function () {
            if (_this.sx) {
                _this.ctx.drawImage(imgs, _this.sx, _this.sy, _this.sw, _this.sh, _this.x, _this.y, _this.w, _this.h);
            } else {
                _this.ctx.drawImage(imgs, _this.x, _this.y, _this.w, _this.h);
            }


        }
    }
    footer() {
        this.ctx.globalAlpha = this.opacity;  //透明度
        this.ctx.closePath();//连接起始点
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fill();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();
        this.ctx.restore(); //还原状态
    }

    static canvas(option) {
        var canvas = document.getElementById(option.idName)
        canvas.width = 600;
        canvas.height = 600;
        canvas.style.border = '1px solid black'

        return canvas.getContext('2d');
    }
}

class Rects extends Rect {

    constructor(option) {
        super(option)
    }

    arc() {
        this.header()
        this.arcs()
        this.footer()
    }

    rect() {
        this.header()
        this.rects()
        this.footer()
    }

}