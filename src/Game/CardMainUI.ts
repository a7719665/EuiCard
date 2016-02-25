/**
 *
 * @author 
 *
 */
class CardMainUI extends eui.Component{
    
    private static _me: CardMainUI;
    public static get me(): CardMainUI {
        if(CardMainUI._me == null) {
            CardMainUI._me = new CardMainUI();
        }
        return CardMainUI._me;
    }
	public constructor() {
    	  super();
        this.skinName = "src/Game/CardMainUISkin.exml";
	}
}
