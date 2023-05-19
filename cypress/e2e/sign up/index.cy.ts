/// <reference types="cypress" />

describe("Sign up flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should try create an account but get validation email errors", () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get(":nth-child(1) > .input__StyledInput-sc-f48d8d79-1").type("email-invalido")

    cy.get(":nth-child(2) > .input__StyledInput-sc-f48d8d79-1").type("aa")

    cy.get(":nth-child(3) > .input__StyledInput-sc-f48d8d79-1").type("aa")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()

    cy.get(".modal__content-sc-10624bae-3 > form > :nth-child(2)").should("be.visible")
    cy.get("form > :nth-child(4)").should("be.visible")
  })
  
  it("should create an account", () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get(":nth-child(1) > .input__StyledInput-sc-f48d8d79-1").type("email-valido6@gmail.com")

    cy.get(":nth-child(2) > .input__StyledInput-sc-f48d8d79-1").type("senhasegura123")

    cy.get(":nth-child(3) > .input__StyledInput-sc-f48d8d79-1").type("senhasegura123")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()
    
    
    cy.get("input[placeholder*='Nome']").type("my-user")

    cy.get("input[placeholder*='Username']").type("my-username")

    cy.get("button").contains("Enviar").click()
  })

  it('should try to create an account with an all ready registed email and get an error', () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get(":nth-child(1) > .input__StyledInput-sc-f48d8d79-1").type("email-valido6@gmail.com")

    cy.get(":nth-child(2) > .input__StyledInput-sc-f48d8d79-1").type("senhasegura123")

    cy.get(":nth-child(3) > .input__StyledInput-sc-f48d8d79-1").type("senhasegura123")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()

    cy.get('.error__StyledError-sc-219a77b0-0').should("be.visible")
  });
})