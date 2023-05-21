/// <reference types="cypress" />

export {}

describe("Sign up flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should try create an account but get validation email errors", () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get("input[placeholder*='Email']").type("email-valido6@gmail.com")

    cy.get("input[placeholder*='Email']").type("aa")

    cy.get("input[placeholder*='Email']").type("aa")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()

    cy.get(".modal__content-sc-10624bae-3 > form > :nth-child(2)").should("be.visible")
    cy.get("form > :nth-child(4)").should("be.visible")
  })
  
  it("should create an account", () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get("input[placeholder*='Email']").type("email-valido6@gmail.com")

    cy.get("input[placeholder*='Senha']").type("senhasegura123")

    cy.get("input[placeholder*='Repita a senha']").type("senhasegura123")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()
    
    
    cy.get("input[placeholder*='Nome']").type("my-user")

    cy.get("input[placeholder*='Username']").type("my-username")

    cy.get("button").contains("Enviar").click()
  })

  it('should try to create an account with an all ready registed email and get an error', () => {
    cy.get(".button__StyledButton-sc-e3959232-0").click()

    cy.get("input[placeholder*='Email']").type("email-valido6@gmail.com")

    cy.get("input[placeholder*='Senha']").type("senhasegura123")

    cy.get("input[placeholder*='Repita a senha']").type("senhasegura123")

    cy.get("form > .button__StyledButton-sc-e3959232-0").click()

    cy.get('.error__StyledError-sc-219a77b0-0').should("be.visible")
  });
})