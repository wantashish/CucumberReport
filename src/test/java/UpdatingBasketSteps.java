import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

/**
 * Created with IntelliJ IDEA.
 * User: ashishsri
 * Date: 14/05/2014
 * Time: 10:18
 * To change this template use File | Settings | File Templates.
 */
public class UpdatingBasketSteps {

    private Basket basket;

    @Given("^a basket with (\\d*) items in it$")
    public void createBasket(int itemsInBasket){
        basket = new Basket(itemsInBasket);
    }

    @When("^(\\d*) items are added to the basket$")
    public void addItemsToTheBasket(int itemsCount){
        basket.addItems(itemsCount);
    }

    @When("^(\\d*) items are removed from the basket$")
    public void removeItemsFromTheBasket(int itemsCount){
        basket.removeItems(itemsCount);
    }

    @Then("^the basket contains (\\d*) items$")
    public void checkItemsCount(int expectedItemsCount){
        assertThat(basket.getItemsCount(),is(expectedItemsCount));
    }
}
