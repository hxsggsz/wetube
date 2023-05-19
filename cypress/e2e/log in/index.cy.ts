/// <reference types="cypress" />

describe("Sign up flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  
  it("should log in", () => {
    cy.get('.menu__login-sc-967fcf6-4').click()

    cy.get(":nth-child(1) > .input__StyledInput-sc-f48d8d79-1").type("email-valido6@gmail.com")

    cy.get(":nth-child(2) > .input__StyledInput-sc-f48d8d79-1").type("senhasegura123")

    cy.get('.modalLogIn__form-sc-cc2c56ce-1 > .button__StyledButton-sc-e3959232-0').click()
  })
})