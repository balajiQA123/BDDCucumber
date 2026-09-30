Feature: Checkout
Scenario: Complete purchase
  Given user is logged in
  When user adds "Sauce Labs Backpack" to cart
  And user goes to cart
  And user proceeds to checkout
  And user enters checkout details
  And user finishes purchase
  Then order should be successful
    