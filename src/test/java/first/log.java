package first;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class log {
	@Given("user in home page")
	public void user_in_home_page() {
	    
	}

	@When("user enters crdentials")
	public void user_enters_crdentials(io.cucumber.datatable.DataTable dt) {
	    List<Map<String,String>> list=dt.asMaps();
	    System.out.println(list.get(1).get("name"));
	    System.out.println(list.get(1).get("password"));
	}

	@When("click  on login button")
	public void click_on_login_button() {
	   
	}

	@Then("Homepage is displayed")
	public void homepage_is_displayed() {
	    
	}
	
}
