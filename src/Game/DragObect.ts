/**
 *
 * @author 
 *
 */
    private newdragObject: egret.Bitmap;
    private imgurl:string;
        this.imgurl = imgpath;
        this.index = _index;
        this.dragObject = ToolUtils.createBitmapByName(this.imgurl);
        this.addChild(this.dragObject);
        this.start();
        //console.log("长度是"+this.dragObject.width);
        
        this.x = 20 + (this.dragObject.width + 20) * this.index;
        console.log("obj的x" + this.x);
        this.y = 20;
        this.newdragObject = ToolUtils.createBitmapByName(this.imgurl);
        this.parent.parent.addChild(this.newdragObject);
        this.newdragObject.x = e.stageX;
        this.newdragObject.y = e.stageY;
        console.log("stage.x"+e.stageX+"    "+this.parent.parent.name);
        