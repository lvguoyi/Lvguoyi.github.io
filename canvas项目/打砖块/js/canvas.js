// canvas基类


class CanvasInfo {
    constructor(option) {
        // || 如果前面值没有，获取后面默认值
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.fillStyle = option.fillStyle || false;
        this.strokeStyle = option.strokeStyle || false;
        this.opacity = option.opacity || 1;
        this.radius = option.r || 0;
        this.startAngle = option.startAngle || 0;
        this.endAngle = option.endAngle;
        this.anticlockwise = option.anticlockwise || false;
        this.translateX = option.translateX || 0;
        this.translateY = option.translateY || 0;
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
        this.rotate = option.rotate || 0;
        this.ctx = option.canvas;//canvas对象

        // 图片对象
        this.src = option.src;
        this.sx = option.sx || null;
        this.sy = option.sy;
        this.sw = option.sw;
        this.sh = option.sh;
        this.imgs = null;

        // 线对象
        this.lineArray = option.line || [];
        this.closePath = option.closePath || false;
    }

    // 公共样式头部 动画效果
    header() {
        this.ctx.save();//保存状态
        // 绘制图形
        this.ctx.beginPath(); //初始化绘制

        this.ctx.translate(this.translateX, this.translateY);//位移
        this.ctx.scale(this.scaleX, this.scaleY);//缩放
        this.ctx.rotate(this.rotate * Math.PI / 180);//旋转
    }
    // 圆形绘制
    arcs() {
        // 绘制圆
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
    }
    // 矩形绘制
    rects() {
        // 绘制矩形
        this.ctx.rect(this.x, this.y, this.w, this.h);
    }
    // 图片绘制
    image() {
        if (this.sx) {
            this.ctx.drawImage(this.imgs, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        } else {
            this.ctx.drawImage(this.imgs, this.x, this.y, this.w, this.h);
        }
    }

    localImage() { //优先加载图片
        this.imgs = new Image();
        this.imgs.src = this.src;
    }

    // 线绘制
    lineTo() {
        for (var i = 0; i < this.lineArray.length; i++) {
            if (i == 0) {
                this.ctx.moveTo(this.lineArray[i][0], this.lineArray[i][1]);
            } else {
                this.ctx.lineTo(this.lineArray[i][0], this.lineArray[i][1]);
            }
        }

    }
    // 公共样式尾部 样式设置
    footer() {
        this.ctx.globalAlpha = this.opacity;  //透明度

        if (this.closePath) {
            this.ctx.closePath();//连接起始点
        }
        if (this.fillStyle) {
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fill();
        }
        if (this.strokeStyle) {
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.stroke();
        }

        this.ctx.restore(); //还原状态
    }

    // canvas初始化对象静态函数
    static canvas(option) {
        var canvas = document.getElementById(option.idName);
        canvas.width = option.w;
        canvas.height = option.h;
        canvas.style.border = option.border;

        return canvas.getContext("2d");
    }

}


class Rects extends CanvasInfo {
    constructor(option) {
        super(option);
    }

    // 绘制圆形
    arc() {
        this.header();
        this.arcs();
        this.footer();
    }
    // 绘制矩形
    rect() {
        this.header();
        this.rects();
        this.footer();
    }
    // 绘制线
    line() {
        this.header();
        this.lineTo();
        this.footer();
    }

}