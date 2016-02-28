/**
 *
 * @author 
 *
 */
class CardMainUI extends eui.Component{
    
    private static _me: CardMainUI;
    public static get me(): CardMainUI {
        if(CardMainUI._me == null) {
            CardMainUI._me = new CardMainUI();
        }
        return CardMainUI._me;
    }
    
    private timeTxt:eui.Label;
    private timer:egret.Timer;
    private upZhuangBtn:eui.Button;
    private cardArr: DragObject[]= new Array();
    private groupArr: eui.Group[] = new Array();
    private rectArr: egret.Rectangle[] = new Array();
    private cardGroup:eui.Group;
    
    private leftGroup:eui.Group;
    private rightGroup: eui.Group;
    private middleGroup: eui.Group;
    private smallLeftGroup: eui.Group;
    private smallRightGroup: eui.Group;
	public constructor() {
    	  super();
        this.skinName = "src/Game/CardMainUISkin.exml";
        this.cardGroup.layout = new eui.HorizontalLayout();
        
        this.timer = new egret.Timer(1000,50);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        this.timer.start();
        this.addEventListen();
        
        this.createCardObject("gold_100_png",0);
        this.createCardObject("gold_100k_png",1);
        this.createCardObject("gold_10k_png",2);
        this.createCardObject("gold_10m_png",3);
        this.createCardObject("gold_1k_png",4);
        this.createCardObject("gold_1m_png",5);
        this.createCardObject("gold_5m_png",6);
        
        
        
        this.formRect();
	}
	private formRect():void{
        this.groupArr = [this.leftGroup,this.middleGroup,this.rightGroup,this.smallLeftGroup,this.smallRightGroup];
	    for(var i:number = 0;i<this.groupArr.length;i++){
            var rect: egret.Rectangle = new egret.Rectangle(this.groupArr[i].x,this.groupArr[i].y,this.groupArr[i].width,this.groupArr[i].height)
	        this.rectArr.push(rect);
            console.log(rect.x + "  " + rect.y + "  " + rect.width + "  " +rect.height);
        }
	}
    private timerFunc() {
        this.timeTxt.text = (this.timer.repeatCount - this.timer.currentCount).toString();
        //console.log("计时");
    }
    private timerComFunc() {
        console.log("计时结束");
        
    }
    private addEventListen():void{
        this.upZhuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upShangClick,this);
        
        this.upZhuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upShangClick,this);
    }
    private upShangClick(evt: egret.TouchEvent): void {
        
    }
    private createCardObject(_path:string,i:number):void{
        var dragobj: DragObject = new DragObject(_path,i);
        this.cardArr.push(dragobj);
        this.cardGroup.addChild(dragobj);
        
    }
    public dropDown(_data:number,sx:number,sy:number):void{
        for(var i: number = 0;i < this.rectArr.length;i++) {
            var rect: egret.Rectangle = this.rectArr[i];
            if(rect.contains(sx,sy) == true){
                console.log("哪个group="+this.groupArr[i].name);
                break;
            }
        }
    }
    
}
