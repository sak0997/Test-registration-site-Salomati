 describe('SauceDemo E2E Test', () => {
 beforeEach(() => {
    cy.visit('https://salomati.tj/register/');
 });

 it('should log in, add a product to cart, and complete checkout', () => {
    //Регистрация на сайте Саломати
    cy.get('#elm_6').type('ABDUGAFFOR'); // Имя
    cy.get('#elm_7').type('SULEYMANOV'); // Фамилия
    cy.get('#elm_9').type('992927053616') // Номер телефона
    cy.get('#email').type('abdugaffor1997@mail.ru'); // Емейл
    cy.get('#password1').type('Abdugaffor@1'); // Пароль
    cy.get('#password2').type('Abdugaffor@1'); // Подтверждение пароля
    cy.get('[#profile_mailing_lists').check();
    cy.get('#profile_mailing_list_1').uncheck();
});
});
