/**
 *
 * @author
 *
 */
var SceneBegin = (function (_super) {
    __extends(SceneBegin, _super);
    function SceneBegin() {
        _super.call(this);
        this.skinName = "src/Game/SceneBeginSkin.exml";
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginClick, this);
    }
    var d = __define,c=SceneBegin,p=c.prototype;
    d(SceneBegin, "me"
        ,function () {
            if (SceneBegin._me == null)
                SceneBegin._me = new SceneBegin();
            return SceneBegin._me;
        }
    );
    p.beginClick = function () {
        var sound = RES.getRes("buttonclick_mp3");
        var channel = sound.play(0, 1);
        console.log("游戏开始");
        //this.parent.addChild(SceneLevels.me);
        this.parent.addChild(CardMainUI.me);
        this.parent.removeChild(this);
    };
    return SceneBegin;
})(eui.Component);
egret.registerClass(SceneBegin,'SceneBegin');
//# sourceMappingURL=SceneBegin.js.map