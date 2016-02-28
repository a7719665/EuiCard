/**
 *
 * @author 
 *
 */
class CardIndex {
    public constructor() {
    }
    public static baiIndex:number=1;
    public static shiwanIndex:number=2;
    public static yiwanIndex: number=3;
    public static yiqianwanIndex: number=4;
    public static yiqianIndex: number=5;
    public static yibaiwanIndex: number=6;
    public static wubaiwanIndex: number=7;
}
class ToolUtils {
	public constructor() {
	}
	
	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
    public static random(a: number,b: number): number {
        return Math.round(a + Math.random() * b);
    }
}
