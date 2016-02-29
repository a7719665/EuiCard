/**
 *
 * @author
 *
 */
var CardMainUI = (function (_super) {
    __extends(CardMainUI, _super);
    function CardMainUI() {
        _super.call(this);
        this.coinArr = new Array();
        this.groupArr = new Array();
        this.rectArr = new Array();
        this.cardArr = new Array();
        this.positionArr = new Array();
        this.sendCardIndex = 0;
        //this.cardShowBgImg.visible=false;
        this.skinName = "src/Game/CardMainUISkin.exml";
        this.cardGroup.layout = new eui.HorizontalLayout();
        this.timer = new egret.Timer(1000, 50);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        this.timer.start();
        this.addEventListen();
        this.createCardObject("gold_100_png", 0);
        this.createCardObject("gold_100k_png", 1);
        this.createCardObject("gold_10k_png", 2);
        this.createCardObject("gold_10m_png", 3);
        this.createCardObject("gold_1k_png", 4);
        this.createCardObject("gold_1m_png", 5);
        this.createCardObject("gold_5m_png", 6);
        this.formRect();
        this.createCardArr();
        this.positionArr = [new egret.Point(540, 680), new egret.Point(180, 680), new egret.Point(580, 680), new egret.Point(220, 680), new egret.Point(260, 680), new egret.Point(620, 680)];
    }
    var d = __define,c=CardMainUI,p=c.prototype;
    d(CardMainUI, "me"
        ,function () {
            if (CardMainUI._me == null) {
                CardMainUI._me = new CardMainUI();
            }
            return CardMainUI._me;
        }
    );
    p.createCardArr = function () {
        for (var i = 0; i < 6; i++) {
            var card = new Card();
            this.addChild(card);
            card.x = 610;
            card.y = -200; //-card.height;
            this.cardArr.push(card);
        }
    };
    p.formRect = function () {
        this.groupArr = [this.leftGroup, this.middleGroup, this.rightGroup, this.smallLeftGroup, this.smallRightGroup];
        for (var i = 0; i < this.groupArr.length; i++) {
            var rect = new egret.Rectangle(this.groupArr[i].x, this.groupArr[i].y, this.groupArr[i].width, this.groupArr[i].height);
            this.rectArr.push(rect);
            console.log(rect.x + "  " + rect.y + "  " + rect.width + "  " + rect.height);
        }
    };
    p.timerFunc = function () {
        this.timeTxt.text = (this.timer.repeatCount - this.timer.currentCount).toString();
        //console.log("计时");
    };
    p.timerComFunc = function () {
        console.log("计时结束");
    };
    p.addEventListen = function () {
        this.upZhuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upShangClick, this);
    };
    /**
     * 申请上庄
     */
    p.upShangClick = function (evt) {
        this.tw = egret.Tween.get(this.cardShowBgImg);
        this.tw.to({ y: 500 }, 500).call(this.ShowBgImgTweenOver, this);
    };
    p.ShowBgImgTweenOver = function () {
        this.sendCard();
    };
    /**
     * 发牌
     */
    p.sendCard = function () {
        this.tw = egret.Tween.get(this.cardArr[this.sendCardIndex]);
        this.tw.to({ y: this.positionArr[this.sendCardIndex].y }, 500)
            .to({ x: this.positionArr[this.sendCardIndex].x + 50 }, 200).call(this.tweenOver, this);
        this.sendCardIndex++;
    };
    p.tweenOver = function () {
        if (this.sendCardIndex < this.positionArr.length)
            var intervalID = setTimeout(this.sendCard(), 200);
        else
            this.sendCardIndex += 0;
    };
    p.createCardObject = function (_path, i) {
        var dragobj = new DragObject(_path, i);
        this.coinArr.push(dragobj);
        this.cardGroup.addChild(dragobj);
    };
    p.dropDown = function (obj, sx, sy) {
        var boo = false;
        for (var i = 0; i < this.rectArr.length; i++) {
            var rect = this.rectArr[i];
            if (rect.contains(sx, sy) == true) {
                console.log("哪个group=" + this.groupArr[i].name);
                var dd = this.groupArr[i];
                dd.addChild(obj.newdragObject);
                var smallx = 0 + obj.width / 2;
                var largex = rect.width - obj.width / 2;
                var smally = 0 + obj.height / 2;
                var largey = rect.height - obj.height / 2;
                obj.newdragObject.x = ToolUtils.random(smallx, largex);
                obj.newdragObject.y = ToolUtils.random(smally, largey);
                boo = true;
                break;
            }
        }
        if (boo == false) {
            obj.newdragObject.parent.removeChild(obj.newdragObject);
        }
    };
    return CardMainUI;
})(eui.Component);
egret.registerClass(CardMainUI,'CardMainUI');
//# sourceMappingURL=CardMainUI.js.map