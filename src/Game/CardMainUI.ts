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
    private baiCoin:eui.Image;
    private qianCoin: eui.Image;
    private yiwanCoin:eui.Image;
    private shiwanCoin: eui.Image;
    private baiwanCoin: eui.Image;
    private wubaiwanCoin: eui.Image;
    private qianwanCoin: eui.Image;
    private coinArr2: eui.Image[] = new Array();
    private curSelectCoinSource:string="";
	public constructor() {
    	  super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
}
    private onAddToStage(event: egret.Event) {        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        //this.cardShowBgImg.visible=false;
        this.skinName = "src/Game/CardMainUISkin.exml";
        //this.cardGroup.layout = new eui.HorizontalLayout();
        
        this.timer = new egret.Timer(1000,50);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        this.timer.start();
        this.addEventListen();
        
        //        this.createCardObject("gold_100_png",0);
        //        this.createCardObject("gold_100k_png",1);
        //        this.createCardObject("gold_10k_png",2);
        //        this.createCardObject("gold_10m_png",3);
        //        this.createCardObject("gold_1k_png",4);
        //        this.createCardObject("gold_1m_png",5);
        //        this.createCardObject("gold_5m_png",6);
        
        this.coinArr2 = [this.baiCoin,this.qianCoin,this.yiwanCoin,this.shiwanCoin,this.baiwanCoin,this.wubaiwanCoin,this.qianwanCoin];
        for(var i=0;i<this.coinArr2.length;i++){
            this.coinArr2[i].touchEnabled = true;            this.coinArr2[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.coinClick,this);
            this.coinArr2[i].anchorOffsetX = this.coinArr2[i].width / 2;
            this.coinArr2[i].anchorOffsetY = this.coinArr2[i].height / 2;
            this.coinArr2[i].x = this.coinArr2[i].x + this.coinArr2[i].width / 2;
            this.coinArr2[i].y = this.coinArr2[i].y + this.coinArr2[i].height/2;
        }
        this.formRect();
        this.createCardArr();

        this.positionArr = [new egret.Point(540,680),new egret.Point(180,680),new egret.Point(580,680),new egret.Point(220,680),new egret.Point(260,680),new egret.Point(620,680)];
	
    }
    /**
     * 点击coin事件
     * @param evt
     */
    private coinClick(evt:egret.TouchEvent):void{
        this.curSelectCoinSource = (evt.currentTarget as eui.Image).source as string;
        //this.curSelectCoinBmd = (evt.currentTarget as eui.Image ).bitmapData;
        for(var i: number = 0;i < this.coinArr2.length;i++){
            if(this.coinArr2[i] == evt.currentTarget){
                this.coinArr2[i].scaleX = 1.5; 
                this.coinArr2[i].scaleY = 1.5; 
            }else{
                this.coinArr2[i].scaleX = 1;
                this.coinArr2[i].scaleY = 1; 
            }
        }
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEend,this);
    }
    
    /**
     * stage监听手指按下事件，下注
     * @param e
     */
    private onTouchEend(e: egret.TouchEvent) {
        if(this.curSelectCoinSource != "")            //this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEend,this);
            this.xiazhuClick(e.stageX,e.stageY);    }
    
    /**
     * 开始下注
     * @param sx
     * @param sy
     */
    public xiazhuClick(sx: number,sy: number): void {
        var boo = false;
        for(var i: number = 0;i < this.rectArr.length;i++) {
            var rect: egret.Rectangle = this.rectArr[i];
            if(rect.contains(sx,sy) == true) {
                console.log("哪个group=" + this.groupArr[i].name);
                var dd: eui.Group = this.groupArr[i];
                var xiazhuobj:egret.Bitmap = ToolUtils.createBitmapByName(this.curSelectCoinSource);
                dd.addChild(xiazhuobj);
                ///xiazhuobj.width = this.curSelectCoinBmd.width;
                //xiazhuobj.height = this.curSelectCoinBmd.height;
                var smallx: number = 0;
                var largex: number = rect.width - xiazhuobj.width;
                var smally: number = 0;
                var largey: number = rect.height - xiazhuobj.height;
                xiazhuobj.x = ToolUtils.random(smallx,largex);
                xiazhuobj.y = ToolUtils.random(smally,largey);
                break;
            }
        }
        
    }
    
    public getCardBack():void{
        this.sendCard();
    }
	/**
	 * 提前创建好6张牌在头顶，等下作发牌用
	 */
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
        //this.sendCard();
        SocketManager.me.sendCard();
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
        this.cardArr[this.sendCardIndex - 1].trun(GameData.me.serverCardArr[this.sendCardIndex - 1]);
        if(this.sendCardIndex < this.positionArr.length){
            var intervalID = setTimeout(this.sendCard(),200);
        }else
            this.sendCardIndex =0; 
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
               
                var smallx :number = 0;
                var largex: number = rect.width - obj.width;
                var smally: number = 0 ;
                var largey: number = rect.height - obj.height ;
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
