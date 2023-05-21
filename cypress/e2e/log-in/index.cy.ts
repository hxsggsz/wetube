/// <reference types="cypress" />

export {}

describe("Log in flow", () => {
  beforeEach(() => {
    cy.visit("/")
  })
   
  it("should log in", () => {
    //@ts-ignore
    cy.login()
  })
})