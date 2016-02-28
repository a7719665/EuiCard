/**
 *
 * @author 
 *
 */
class WxTool {
	public constructor() {
	}
	
	public static testWx():void{
	    var bodyCof:BodyConfig = new BodyConfig();
	    bodyCof.appId = "aaaa";
	    bodyCof.debug = true;
	    if(wx){
	        wx.config(bodyCof);
	        wx.ready(function(){
    	        
    	        });
	    }
	}
}
