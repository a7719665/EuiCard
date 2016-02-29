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
    private coinArr: DragObject[]= new Array();
    private groupArr: eui.Group[] = new Array();
    private rectArr: egret.Rectangle[] = new Array();
    private cardGroup:eui.Group;
    
    private leftGroup:eui.Group;
    private rightGroup: eui.Group;
    private middleGroup: eui.Group;
    private smallLeftGroup: eui.Group;
    private smallRightGroup: eui.Group;
    private cardShowBgImg:eui.Image;
    private cardArr:Card[] = new Array();
    private positionArr:egret.Point[]=new Array();
    private sendCardIndex:number=0;
    private tw: egret.Tween;
	public constructor() {
    	  super();
        //this.cardShowBgImg.visible=false;
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
        this.createCardArr();
        
        this.positionArr = [new egret.Point(540,680),new egret.Point(180,680),new egret.Point(580,680),new egret.Point(220,680),new egret.Point(260,680),new egret.Point(620,680)];
	}
	private createCardArr():void{
    	for(var i:number = 0;i<6;i++){
            var card: Card = new Card();
            this.addChild(card);
            card.x = 610;
            card.y = -200;//-card.height;
            this.cardArr.push(card);
    	}
	   
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
    }
    /**
     * 申请上庄
     */ 
    private upShangClick(evt: egret.TouchEvent): void { 
        this.tw = egret.Tween.get(this.cardShowBgImg);
        this.tw.to({ y: 500 },500).call(this.ShowBgImgTweenOver,this);

    }
    private ShowBgImgTweenOver():void{
        this.sendCard();
    }

    
    /**
     * 发牌
     */ 
    private sendCard():void{
        this.tw = egret.Tween.get(this.cardArr[this.sendCardIndex]);
        this.tw.to({ y: this.positionArr[this.sendCardIndex].y },500)
            .to({ x: this.positionArr[this.sendCardIndex].x+50 },200).call(this.tweenOver,this);
        this.sendCardIndex++;
    }
    
    private tweenOver():void{
        if(this.sendCardIndex < this.positionArr.length)
            var intervalID = setTimeout(this.sendCard(),200);
        else
            this.sendCardIndex +=0; 
    }
    private createCardObject(_path:string,i:number):void{
        var dragobj: DragObject = new DragObject(_path,i);
        this.coinArr.push(dragobj);
        this.cardGroup.addChild(dragobj);
        
    }
    public dropDown(obj:DragObject,sx:number,sy:number):void{
        var boo = false;
        for(var i: number = 0;i < this.rectArr.length;i++) {
            var rect: egret.Rectangle = this.rectArr[i];
            if(rect.contains(sx,sy) == true){
                console.log("哪个group="+this.groupArr[i].name);
                var dd:eui.Group = this.groupArr[i];
                dd.addChild(obj.newdragObject);
               
                var smallx :number = 0+obj.width/2;
                var largex: number = rect.width - obj.width / 2;
                var smally: number = 0 + obj.height / 2;
                var largey: number = rect.height - obj.height / 2;
                obj.newdragObject.x = ToolUtils.random(smallx,largex);
                obj.newdragObject.y = ToolUtils.random(smally,largey);
                boo=true;
                break;
            }
        }
        if(boo == false){
            obj.newdragObject.parent.removeChild(obj.newdragObject);
        }
    }
    
}
