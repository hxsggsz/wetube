/// <reference types="cypress" />

export { }

describe("Register video flow", () => {
  beforeEach(() => {
    cy.visit("/")

    //@ts-ignore
    cy.login()

    cy
      .get("[data-cy='open-menu']")
      .click()

    cy
      .get("[data-cy='add-video']")
      .click()

    cy
      .get('.select__Trigger-sc-5cdf7010-0')
      .click()
  })

  it("should try to post a video but get validation errors", () => {
    cy
      .get("[data-cy='item-test']")
      .click()

    cy
      .get("input[placeholder*='Titulo do video']")
      .type("teste")

    cy
      .get("input[placeholder*='Ensira a URL aqui']")
      .type("teste")

    cy
      .get("button")
      .contains("Submit")
      .click()

    cy
      .get("span")
      .contains("precisa ter pelo menos 10 caracteres")
      .should("be.visible")

    cy
      .get("span")
      .contains("Preencha com uma URL válida")
      .should("be.visible")
  })

  it('should post a video', () => {
    cy
      .get("[data-cy='item-test-tech']")
      .click()

    cy
      .get("input[placeholder*='Titulo do video']")
      .type("Esse video foi foi postado pelo cypress :D")

    cy
      .get("input[placeholder*='Ensira a URL aqui']")
      .type("https://www.youtube.com/watch?v=ipE9bsfYEog&t=7s")

    cy
      .get("button")
      .contains("Submit")
      .click()
  })
})