/**
 *
 * @author
 *
 */
var CardMainUI = (function (_super) {
    __extends(CardMainUI, _super);
    function CardMainUI() {
        _super.call(this);
        this.cardArr = new Array();
        this.skinName = "src/Game/CardMainUISkin.exml";
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
    p.timerFunc = function () {
        this.timeTxt.text = (this.timer.repeatCount - this.timer.currentCount).toString();
        //console.log("计时");
    };
    p.timerComFunc = function () {
        console.log("计时结束");
    };
    p.addEventListen = function () {
        this.upZhuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upShangClick, this);
        this.upZhuangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upShangClick, this);
    };
    p.upShangClick = function (evt) {
    };
    p.createCardObject = function (_path, i) {
        var dragobj = new DragObject(_path, i);
        this.cardArr.push(dragobj);
        this.cardGroup.addChild(dragobj);
    };
    return CardMainUI;
})(eui.Component);
egret.registerClass(CardMainUI,'CardMainUI');
