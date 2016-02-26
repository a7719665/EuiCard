/**
 *
 * @author
 *
 */
var DragObject = (function (_super) {
    __extends(DragObject, _super);
    function DragObject(imgpath, _index) {
        _super.call(this);
        this.offsetX = 0;
        this.offsetY = 0;
        this.imgurl = imgpath;
        this.index = _index;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DragObject,p=c.prototype;
    p.onAddToStage = function (event) {
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.dragObject = ToolUtils.createBitmapByName(this.imgurl);
        this.addChild(this.dragObject);
        this.start();
        //console.log("长度是"+this.dragObject.width);
        this.x = 20 + (this.dragObject.width + 20) * this.index;
        console.log("obj的x" + this.x);
        this.y = 20;
    };
    /*
     * 开始拖拽
     * @param _dragObject 拖拽对象
     * @param offsetX     X轴偏移
     * @param offsetY     Y轴偏移
     * */
    p.start = function (offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        //this.dragObject = _dragObject;
        this.dragObject.touchEnabled = true;
        this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
    };
    p.onTouchEend = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    p.onTouchBegin = function (e) {
        this.newdragObject = ToolUtils.createBitmapByName(this.imgurl);
        this.parent.parent.addChild(this.newdragObject);
        this.newdragObject.x = e.stageX;
        this.newdragObject.y = e.stageY;
        console.log("stage.x" + e.stageX + "    " + this.parent.parent.name);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    p.onTouchMove = function (e) {
        if (this.newdragObject) {
            this.newdragObject.x = e.stageX -
                ((this.newdragObject.width * this.newdragObject.scaleX) / 2)
                - (this.newdragObject.anchorOffsetX * (this.newdragObject.width * this.newdragObject.scaleX)) + this.offsetX;
            this.newdragObject.y = e.stageY -
                ((this.newdragObject.height * this.newdragObject.scaleY) / 2) +
                (this.newdragObject.anchorOffsetY * (this.newdragObject.height * this.newdragObject.scaleY)) + this.offsetY;
        }
        else {
            this.stop();
        }
    };
    p.stop = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
        this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    };
    return DragObject;
})(egret.Sprite);
egret.registerClass(DragObject,'DragObject');
//# sourceMappingURL=DragObect.js.map