/**
 *
 * @author 
 *
 */
class Card extends egret.Sprite{
    public zhengBmp: egret.Bitmap;
    public fuBmp: egret.Bitmap;
	public constructor() {
    	  super();
        this.fuBmp = ToolUtils.createBitmapByName("back_png");
        this.addChild(this.fuBmp);
        this.width = 180;
        this.height = 286;
        this.scaleX=3;
        this.scaleY=3;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}
    private onAddToStage(event: egret.Event) {        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    
    /**
     * 翻牌展开看
     * @param arr
     */
    public trun(arr:number[]):void{
        //2_2_png
        var url:string = arr[0]+"_"+arr[1]+"_png";
        this.fuBmp.texture = ToolUtils.createBTextureByName(url);
        console.log("发的牌号======"+url);
    }
}
