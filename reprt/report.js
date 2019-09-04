$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:first/login.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "log.user_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters crdentials",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ]
    },
    {
      "cells": [
        "name1",
        "ikjijik"
      ]
    },
    {
      "cells": [
        "name2",
        "lknjhy"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "log.user_enters_crdentials(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click  on login button",
  "keyword": "And "
});
formatter.match({
  "location": "log.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "log.homepage_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});