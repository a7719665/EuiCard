/**
 *
 * @author 
 *
 */
class SceneLevels  extends eui.Component{
    private backBtn:eui.Button;
    private group_levels:eui.Group;
    private static _me:SceneLevels;
    public static get me():SceneLevels{
        if(SceneLevels._me == null){
            SceneLevels._me = new SceneLevels();
        }
        return SceneLevels._me;
    }
	public constructor() {
    	super();
      this.skinName = "src/Game/SceneLevelsSkin.exml";
      this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backClick,this);
    	this.initScene();
	}
	
    private initScene():void{
        var bgimg:eui.Image = new eui.Image();
        bgimg.source = RES.getRes("006_jpg");
        this.addChild(bgimg);
        bgimg.x = 0;
        bgimg.y = 0;
	    for (var i=0;i<20;i++){
	        var img:LevelIcon = new LevelIcon();
	        img.Level = i+1;
	        img.x = this.group_levels.width/2;
	        img.y = 10+ 90*i;
	        this.group_levels.addChild(img);
	        img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
	    }
	    
	    //this.group_levels.scrollV=this.group_levels.height-1100;
	}
	
    private backClick(evt: egret.TouchEvent): void {
        this.parent.addChild(SceneBegin.me);
        this.parent.removeChild(SceneLevels.me);
    }
	
    private onClick(evt:egret.TouchEvent):void{
        var icon = <LevelIcon>evt.currentTarget;
        console.log("点击到了levelIcon"+icon.Level);
    }
	
}
