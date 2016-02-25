/**
 *
 * @author
 *
 */
var CardMainUI = (function (_super) {
    __extends(CardMainUI, _super);
    function CardMainUI() {
        _super.call(this);
        this.skinName = "src/Game/CardMainUISkin.exml";
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
    return CardMainUI;
})(eui.Component);
egret.registerClass(CardMainUI,'CardMainUI');
//# sourceMappingURL=CardMainUI.js.map