/**
 *
 * @author
 *
 */
var LevelIcon = (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        _super.call(this);
        this.skinName = "src/Game/LevelIconSkin.exml";
    }
    var d = __define,c=LevelIcon,p=c.prototype;
    d(p, "Level"
        ,function () {
            return parseInt(this.lvTxt.text);
        }
        ,function (value) {
            this.lvTxt.text = value.toString();
        }
    );
    return LevelIcon;
})(eui.Button);
egret.registerClass(LevelIcon,'LevelIcon');
//# sourceMappingURL=LevelIcon.js.map