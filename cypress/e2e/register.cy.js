import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="ad-input"]').type("em");
      //asset
      cy.contains(errorMessages.ad);
    });
    it('Surname input throws error for 2 chars', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="soyad-input"]').type("şa");
      //asset
      cy.contains(errorMessages.soyad);
    });
    it('Email input throws error for emre@wit.', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="email-input"]').type("emre@wit.");
      //asset
      cy.contains(errorMessages.email);
    });
    it('Password input throws error for 1234', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="password-input"]').type("1234");
      //asset
      cy.contains(errorMessages.password);
    });
    it('Button is disabled for unvalideated inputs', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="password-input"]').type("1234");
      //asset
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    });
    
  });
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      //arange
      cy.visit('http://localhost:5173/');
      //act
      cy.get('[data-cy="ad-input"]').type("Emre");
      cy.get('[data-cy="soyad-input"]').type("Şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**")
      //asset
      cy.get('[data-cy="submit-button"]').should("not.be.disabled")
    });
    
    
  });
});