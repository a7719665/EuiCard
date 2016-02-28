/**
 *
 * @author
 *
 */
var SceneLevels = (function (_super) {
    __extends(SceneLevels, _super);
    function SceneLevels() {
        _super.call(this);
        this.skinName = "src/Game/SceneLevelsSkin.exml";
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backClick, this);
        this.initScene();
    }
    var d = __define,c=SceneLevels,p=c.prototype;
    d(SceneLevels, "me"
        ,function () {
            if (SceneLevels._me == null) {
                SceneLevels._me = new SceneLevels();
            }
            return SceneLevels._me;
        }
    );
    p.initScene = function () {
        var bgimg = new eui.Image();
        bgimg.source = RES.getRes("006_jpg");
        this.addChild(bgimg);
        bgimg.x = 0;
        bgimg.y = 0;
        for (var i = 0; i < 20; i++) {
            var img = new LevelIcon();
            img.Level = i + 1;
            img.x = this.group_levels.width / 2;
            img.y = 10 + 90 * i;
            this.group_levels.addChild(img);
            img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        //this.group_levels.scrollV=this.group_levels.height-1100;
    };
    p.backClick = function (evt) {
        this.parent.addChild(SceneBegin.me);
        this.parent.removeChild(SceneLevels.me);
    };
    p.onClick = function (evt) {
        var icon = evt.currentTarget;
        console.log("点击到了levelIcon" + icon.Level);
    };
    return SceneLevels;
})(eui.Component);
egret.registerClass(SceneLevels,'SceneLevels');
//# sourceMappingURL=SceneLevels.js.map