/**
 *
 * @author 
 *
 */
class GameData {
	public constructor() {
	}
    private static _me: GameData;
    public static get me() {
        if(GameData._me == null)
            GameData._me = new GameData();
        return GameData._me;
    }
    
    public serverCardArr: number[][] = new Array();
}
