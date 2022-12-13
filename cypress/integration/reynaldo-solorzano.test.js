/// <reference types="cypress" />




describe("Lodgify Pricing", () => {
    
  it("Check Price for 50 rentals TASK1", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get('input[type="number"]')
      .invoke('val', 50)
      .trigger('change')
    cy.get('.total-sum').eq(0).should('text','64')
    cy.get('.total-sum').eq(1).should('text','375')
    cy.get('.total-sum').eq(2).should('text','525')

  });
  


  it("Checking Currency USD TASK2", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get('.price-currency-select').select(1)
    cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','$')
    cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','$')
    cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','$')
     
  });



  it("Checking Currency GBR TASK2", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get('.price-currency-select').select(2)
    cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','£')
    cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','£')
    cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','£')

  });



  it("Checking Currency EUR TASK2", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get('.price-currency-select').select(0)
    cy.get('.price-card-starter > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','€')
    cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','€')
    cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price > .currency-symbol-pre').should('text','€')

  });



  it("AddFreeTest-Checking Buttons TASK3", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get(':nth-child(1) > .box-wd-sm > .push-top-2 > .link-read-more').should('be.visible')
    cy.get(':nth-child(2) > .box-wd-sm > .push-top-2 > .link-read-more').should('be.visible')
    cy.get(':nth-child(3) > .container > :nth-child(1)').click()
    cy.get('.active > .faq-answer').contains('For a website with more than 100 rentals or a complete custom web design, please contact us')
    cy.get('.active > .faq-answer > .push-top-1 > .link-read-more').should('be.visible')
    cy.get(':nth-child(6) > .faq-question').click()
    cy.get(':nth-child(6) > .faq-answer > .push-top-1 > .link-read-more').should('be.visible')
    cy.get(':nth-child(16) > .faq-question').click()
    cy.get(':nth-child(16) > .faq-answer > .push-top-1 > .link-read-more').should('be.visible')
  
  });

  
  
  it("AddFreeTest-Checking Buttons for 1 rentals Monthly TASK3", () => {
    cy.visit("http://localhost:8080/pricing.html")
    cy.get('[data-price-period="1"] > span').click()
    cy.get('.price-card-starter > .price-item > :nth-child(2) > .wd-100 > .btn').should('be.visible')
    cy.get(':nth-child(2) > .price-item > :nth-child(2) > .wd-100 > .btn').should('be.visible')
    cy.get(':nth-child(3) > .price-item > :nth-child(2) > .wd-100 > .btn').should('be.visible')

  });    

})





describe("Lodgify Contact", () => {
  
  it("Contact Form TASK4", () => {
    cy.visit("http://localhost:8080/contact.html")
    cy.get('[data-testid="form"] > [data-testid="button"]').click()
    cy.get(':nth-child(1) > :nth-child(1) > .input > .ui').contains("Name is mandatory")
    cy.get('.eight > .input > .ui').contains("Email is mandatory")
    cy.get(':nth-child(4) > .input > .ui').contains("Comment is mandatory")
    cy.get('[data-testid="phone-input"]').contains("Phone is mandatory")
      
  });



  it("Contact Form testing dates TASK4", () => {
    cy.visit("http://localhost:8080/contact.html")
    cy.get(':nth-child(1) > :nth-child(1) > .input > input').type("Matt Ryan")
    cy.get('.eight > .input > input').type("mattryan@email.com")
    cy.get('[data-testid="phone-input"]').type("54879878")
    cy.get('.four > .ui > input').type("1")
    cy.get('.DateRangePickerInput > :nth-child(2)').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault').click()
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault').click()
    cy.get('[aria-label="Friday, April 14, 2023"]').click()
    cy.get('[aria-label="Sunday, May 14, 2023"]').click()
    cy.get('.input > textarea').type("Quisque porta justo massa, et interdum nulla placerat eu. Maecenas in quam ac libero iaculis aliquet. Vivamus aliquam mollis purus sed mattis. Vivamus vitae nibh lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dapibus tortor quis tincidunt elementum. Donec tempor lectus sed nibh vehicula convallis. Quisque in enim dapibus sem posuere vestibulum")
    cy.get('[data-testid="form"] > [data-testid="button"]').click();
    cy.get('.content > p').contains("Your request has been sent successfully")
       
   });



  it("AddFreeTest-Contact Page Checking Buttons TASK5", () => {
    cy.visit("http://localhost:8080/contact.html")
    cy.get('[data-testid="navigation-icon"]').should('be.visible')
    cy.get('.scrolling > .search').should('not.be.visible')
       
   });
   
})