/**
 *
 * @author 
 *
 */
class SocketManager {
	public constructor() {
	}
    private static _me: SocketManager;
    public static get me() {
        if(SocketManager._me == null)
            SocketManager._me = new SocketManager();
        return SocketManager._me;
    }
    private webSocket: egret.WebSocket;
    
    public startConect():void{
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        this.webSocket.connect("echo.websocket.org",80);



        //var urlreq: egret.URLRequest = new egret.URLRequest("http://httpbin.org/user-agent");
        //var urlloader: egret.URLLoader = new egret.URLLoader();
        //urlloader.addEventListener(egret.Event.COMPLETE,function(evt: egret.Event): void { console.log(evt.target.data); },this);
        //urlloader.load(urlreq);
    }
    private onSocketOpen(): void {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful, send data: " + cmd);
        //this.webSocket.writeUTF(cmd);
        this.reqTest();
    }
    private onSocketClose(): void {
        console.log("Socket Close");
    }
    private onReceiveMessage(e: egret.Event): void {
        var byte:egret.ByteArray = new egret.ByteArray();
        this.webSocket.readBytes(byte);
        console.warn("收到消息");
        
        var msg :string = byte.readUTFBytes(byte.length);
        console.log("Receive data:" + msg);
        
        var obj:any = JSON.parse(msg);
        var type:string = obj.type;
        if(type == "getTestSessionRsp"){
            this.testBack(obj);
        }
    }
    
    //请求测试
    private reqTest(): void {
        var data: any = new Object();
        data.type = "getTestSessionRsp";
        
        var byte:egret.ByteArray = new egret.ByteArray();
        byte.writeUTFBytes(JSON.stringify(data));
        this.webSocket.writeBytes(byte,0,byte.bytesAvailable);
        this.webSocket.flush();
    }
    
    //消息返回 统一处理
    private onRegTestClickBack(): void {
        var data: any = new Object();
        data.type = "getTestSessionRsp";

    }
    
    private testBack(obj:any):void{
        console.log("服务器消息返回拉，type="+obj.type);
    }
    
    public sendCard():void{
        while(GameData.me.serverCardArr.length>0)
            GameData.me.serverCardArr.pop();
        for(var i:number=1;i<=6;i++){
            var arrchild: number[] = new Array();
            arrchild.push(i,ToolUtils.random(1,3));
            GameData.me.serverCardArr.push(arrchild);
        }
        
        CardMainUI.me.getCardBack();
    }
}
