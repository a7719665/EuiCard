/**
 *
 * @author 
 *
 */class DragObject extends egret.Sprite {    public dragObject: egret.Bitmap;
    public newdragObject: egret.Bitmap;
    private imgurl:string;    private offsetX: number = 0;    private offsetY: number = 0;    private index:number;
    private data:number;    public constructor(imgpath: string,_index: number,_data: number = CardIndex.yiqianIndex) {        super();
        this.data = _data;
        this.imgurl = imgpath;
        this.index = _index;        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);    }    private onAddToStage(event: egret.Event) {        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.dragObject = ToolUtils.createBitmapByName(this.imgurl);
        this.addChild(this.dragObject);
        this.start();
        //console.log("长度是"+this.dragObject.width);
        
        this.x = 20 + (this.dragObject.width + 20) * this.index;
        console.log("obj的x" + this.x);
        this.y = 20;    }     /*     * 开始拖拽     * @param _dragObject 拖拽对象     * @param offsetX     X轴偏移     * @param offsetY     Y轴偏移     * */    public start(offsetX: number = 0,offsetY: number = 0) {        this.offsetX = offsetX;        this.offsetY = offsetY;        //this.dragObject = _dragObject;        this.dragObject.touchEnabled = true;        this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);    }    private onTouchEend(e: egret.TouchEvent) {        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEend,this);
        
        CardMainUI.me.dropDown(this,e.stageX,e.stageY);    }    private onTouchBegin(e: egret.TouchEvent) {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEend,this);
        
        this.newdragObject = new egret.Bitmap(RES.getRes(this.imgurl));
        //this.newdragObject = ToolUtils.createBitmapByName(this.imgurl);
        
        //this.parent.parent.setChildIndex(this.newdragObject,this.parent.parent.numChildren-1);
        
        this.newdragObject.x = e.stageX -            ((this.newdragObject.width * this.newdragObject.scaleX) / 2)            - (this.newdragObject.anchorOffsetX * (this.newdragObject.width * this.newdragObject.scaleX)) + this.offsetX;        this.newdragObject.y = e.stageY -            ((this.newdragObject.height * this.newdragObject.scaleY) / 2) +            (this.newdragObject.anchorOffsetY * (this.newdragObject.height * this.newdragObject.scaleY)) + this.offsetY;
        
        this.parent.parent.addChildAt(this.newdragObject,this.parent.parent.numChildren - 1);
            }    private onTouchMove(e: egret.TouchEvent) {
        //if(this.parent.parent.contains(this.newdragObject) == false)
        //    this.parent.parent.addChildAt(this.newdragObject,this.parent.parent.numChildren - 1);
                if(this.newdragObject) {            this.newdragObject.x = e.stageX -                ((this.newdragObject.width * this.newdragObject.scaleX) / 2)                - (this.newdragObject.anchorOffsetX * (this.newdragObject.width * this.newdragObject.scaleX)) + this.offsetX;            this.newdragObject.y = e.stageY -                ((this.newdragObject.height * this.newdragObject.scaleY) / 2) +                (this.newdragObject.anchorOffsetY * (this.newdragObject.height * this.newdragObject.scaleY)) + this.offsetY;        }        else {            this.stop();        }
    }    public stop() {        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEend,this);        this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);    }}