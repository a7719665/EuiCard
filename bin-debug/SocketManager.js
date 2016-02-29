/**
 *
 * @author
 *
 */
var SocketManager = (function () {
    function SocketManager() {
    }
    var d = __define,c=SocketManager,p=c.prototype;
    d(SocketManager, "me"
        ,function () {
            if (SocketManager._me == null)
                SocketManager._me = new SocketManager();
            return SocketManager._me;
        }
    );
    p.startConect = function () {
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.webSocket.connect("echo.websocket.org", 80);
        //var urlreq: egret.URLRequest = new egret.URLRequest("http://httpbin.org/user-agent");
        //var urlloader: egret.URLLoader = new egret.URLLoader();
        //urlloader.addEventListener(egret.Event.COMPLETE,function(evt: egret.Event): void { console.log(evt.target.data); },this);
        //urlloader.load(urlreq);
    };
    p.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful, send data: " + cmd);
        //this.webSocket.writeUTF(cmd);
        this.reqTest();
    };
    p.onSocketClose = function () {
        console.log("Socket Close");
    };
    p.onReceiveMessage = function (e) {
        var byte = new egret.ByteArray();
        this.webSocket.readBytes(byte);
        console.warn("收到消息");
        var msg = byte.readUTFBytes(byte.length);
        console.log("Receive data:" + msg);
        var obj = JSON.parse(msg);
        var type = obj.type;
        if (type == "getTestSessionRsp") {
            this.testBack(obj);
        }
    };
    //请求测试
    p.reqTest = function () {
        var data = new Object();
        data.type = "getTestSessionRsp";
        var byte = new egret.ByteArray();
        byte.writeUTFBytes(JSON.stringify(data));
        this.webSocket.writeBytes(byte, 0, byte.bytesAvailable);
        this.webSocket.flush();
    };
    //消息返回 统一处理
    p.onRegTestClickBack = function () {
        var data = new Object();
        data.type = "getTestSessionRsp";
    };
    p.testBack = function (obj) {
        console.log("服务器消息返回拉，type=" + obj.type);
    };
    return SocketManager;
})();
egret.registerClass(SocketManager,'SocketManager');
//# sourceMappingURL=SocketManager.js.map