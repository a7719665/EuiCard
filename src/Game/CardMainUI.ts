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
    private cardGroup:eui.Panel;
	public constructor() {
    	  super();
        this.skinName = "src/Game/CardMainUISkin.exml";
        
        
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
    
    
}
