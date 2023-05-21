/// <reference types="cypress" />

export { }

describe("Search video flow", () => {
  beforeEach(() => {
    cy.visit("/")
    
    //@ts-ignore
    cy.login()
  })

  it("search for a video and find nothing", () => {
    cy
      .get("input[placeholder*='Pesquise um video']")
      .type("video que não existe")

    cy
      .get("div")
      .contains("video não-encontrado")
      .should("be.visible")
  })

  it("search for a video and watch it", () => {
    cy
      .get("input[placeholder*='Pesquise um video']")
      .type("Igor")

    cy
      .get("a")
      .contains("Igor (Full Album)")
      .should("be.visible")
      .click()

    cy
    .url()
    .should('include', '/wfGuSP7PvW4')
  })
})