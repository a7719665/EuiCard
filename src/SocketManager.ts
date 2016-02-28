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
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.connect("echo.websocket.org",80);



        //var urlreq: egret.URLRequest = new egret.URLRequest("http://httpbin.org/user-agent");
        //var urlloader: egret.URLLoader = new egret.URLLoader();
        //urlloader.addEventListener(egret.Event.COMPLETE,function(evt: egret.Event): void { console.log(evt.target.data); },this);
        //urlloader.load(urlreq);
    }
    private onSocketOpen(): void {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful, send data: " + cmd);
        this.webSocket.writeUTF(cmd);
    }

    private onReceiveMessage(e: egret.Event): void {
        var msg = this.webSocket.readUTF();
        console.log("Receive data:" + msg);
    }
}
