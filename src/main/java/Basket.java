/**
 * Created with IntelliJ IDEA.
 * User: ashishsri
 * Date: 14/05/2014
 * Time: 10:19
 * To change this template use File | Settings | File Templates.
 */
public class Basket {

    private int itemsInBasket = 0;



    public Basket(int itemsCount) {
        itemsInBasket = itemsCount;
    }

    public void addItems(int itemsCount) {
        itemsInBasket = itemsInBasket +itemsCount;
    }

    public int getItemsCount() {
        return itemsInBasket;
    }

    public void removeItems(int itemsCount) {
        itemsInBasket = itemsInBasket - itemsCount;
    }
}
