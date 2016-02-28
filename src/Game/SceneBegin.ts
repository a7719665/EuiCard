/**
 *
 * @author 
 *
 */
class SceneBegin extends eui.Component{
    private static _me: SceneBegin;
    public static get me(){
        if(SceneBegin._me == null)
            SceneBegin._me = new SceneBegin();
        return SceneBegin._me;
    }
    private btn_begin:eui.Component;
	public constructor() {
    	super();
    	this.skinName = "src/Game/SceneBeginSkin.exml";
    	this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beginClick,this);
	}
	
    private beginClick(){
        console.log("sound11111111111...");
        var sound: egret.Sound = RES.getRes("buttonclick_mp3");
        console.log("sound..."+sound);
        var channel: egret.SoundChannel = sound.play(0,1);
        return;
        console.log("游戏开始");
        //this.parent.addChild(SceneLevels.me);
        this.parent.addChild(CardMainUI.me);
        this.parent.removeChild(this);
    }
}
