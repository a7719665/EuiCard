/**
 *
 * @author
 *
 */
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        _super.call(this);
        this.fuBmp = ToolUtils.createBitmapByName("back_png");
        this.addChild(this.fuBmp);
        this.width = 180;
        this.height = 286;
        this.scaleX = 3;
        this.scaleY = 3;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Card,p=c.prototype;
    p.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    return Card;
})(egret.Sprite);
egret.registerClass(Card,'Card');
//# sourceMappingURL=Card.js.map