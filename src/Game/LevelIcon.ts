/**
 *
 * @author 
 *
 */
class LevelIcon extends eui.Button{
    private lvTxt:eui.Label;
	public constructor() {
    	super();
    	this.skinName = "src/Game/LevelIconSkin.exml";
	}
	
	public get Level():number{
	    return parseInt(this.lvTxt.text);
	}
	
    public set Level(value: number) {
        this.lvTxt.text = value.toString();
    }
}
