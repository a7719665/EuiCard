/**
 *
 * @author
 *
 */
var CardIndex = (function () {
    function CardIndex() {
    }
    var d = __define,c=CardIndex,p=c.prototype;
    CardIndex.baiIndex = 1;
    CardIndex.shiwanIndex = 2;
    CardIndex.yiwanIndex = 3;
    CardIndex.yiqianwanIndex = 4;
    CardIndex.yiqianIndex = 5;
    CardIndex.yibaiwanIndex = 6;
    CardIndex.wubaiwanIndex = 7;
    return CardIndex;
})();
egret.registerClass(CardIndex,'CardIndex');
var ToolUtils = (function () {
    function ToolUtils() {
    }
    var d = __define,c=ToolUtils,p=c.prototype;
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    ToolUtils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    ToolUtils.createBTextureByName = function (name) {
        var texture = RES.getRes(name);
        return texture;
    };
    ToolUtils.random = function (a, b) {
        return Math.round(a + Math.random() * b);
    };
    return ToolUtils;
})();
egret.registerClass(ToolUtils,'ToolUtils');
//# sourceMappingURL=ToolUtils.js.map