/**
 *
 * @author
 *
 */
var GameData = (function () {
    function GameData() {
        this.serverCardArr = new Array();
    }
    var d = __define,c=GameData,p=c.prototype;
    d(GameData, "me"
        ,function () {
            if (GameData._me == null)
                GameData._me = new GameData();
            return GameData._me;
        }
    );
    return GameData;
})();
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map