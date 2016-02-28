/**
 *
 * @author
 *
 */
var WxTool = (function () {
    function WxTool() {
    }
    var d = __define,c=WxTool,p=c.prototype;
    WxTool.testWx = function () {
        var bodyCof = new BodyConfig();
        bodyCof.appId = "aaaa";
        bodyCof.debug = true;
        if (wx) {
            wx.config(bodyCof);
            wx.ready(function () {
            });
        }
    };
    return WxTool;
})();
egret.registerClass(WxTool,'WxTool');
//# sourceMappingURL=WxTool.js.map