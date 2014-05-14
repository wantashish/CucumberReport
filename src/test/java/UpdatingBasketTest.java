import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created with IntelliJ IDEA.
 * User: ashishsri
 * Date: 13/05/2014
 * Time: 22:17
 * To change this template use File | Settings | File Templates.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/UpdatingBasket.feature",
        format = {"pretty", "json:src/test/report/UpdatingBasket.json"})
public class UpdatingBasketTest {

}
