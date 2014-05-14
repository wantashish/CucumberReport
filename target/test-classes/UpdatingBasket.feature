Feature: Updating items in the basket

  Scenario: Adding items
    Given a basket with 5 items in it
    When 2 items are added to the basket
    Then the basket contains 7 items

  Scenario: Removing items
    Given a basket with 5 items in it
    When 2 items are removed from the basket
    Then the basket contains 3 items
