/// <reference types="cypress" />

export {}

describe("Profile flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })
   
  it("should try see the profile page and be redirect to index", () => {
    cy.visit("/profile")

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`)
  })

  it('should see the profile page', () => {
    //@ts-ignore
    cy.login()

    cy.visit("/profile")

    cy.url().should("be.equal", "/profile")
  })
})