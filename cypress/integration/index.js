const randomUseragent = require('random-useragent');
const config = require('../../config.json');

Cypress.config('redirectionLimit', 299);

function fillForm() {
  cy.visit('https://sede.administracionespublicas.gob.es/icpplus/index.html', {
    headers: {
      'user-agent': randomUseragent.getRandom(),
    },
  });
  cy.get('#form').select(config.city);
  cy.get('#btnAceptar').click();
  cy.get('#sede').select(config.placeAddress);
  cy.wait(1000);
  cy.get('#divGrupoTramites select').select(config.process);
  cy.get('#btnAceptar').click();
  cy.get('#btnEntrar').click();
  cy.get('#txtIdCitado').type(config.documentId);
  cy.get('#txtDesCitado').type(config.fullName);
  cy.get('body').then((body) => {
    if (body.find('#txtPaisNac').length) {
      cy.get('#txtPaisNac').select(config.country);
    }
  });

  cy.get('#btnEnviar').click();
  cy.get('#btnEnviar').click();

  cy.get('body').then((body) => {
    if (body.find('.mf-msg__info').length > 0) {
      cy.clearCookies();

      cy.wait(1000);

      fillForm();
    } else {
      cy.get('#idSede').select(config.placeAddress);
      cy.get('#btnSiguiente').click();

      cy.get('#txtTelefonoCitado').type(config.phone);

      // cy.pause();

      cy.get('#emailUNO').type(config.email);
      cy.get('#emailDOS').type(config.email);
      cy.get('#btnSiguiente').click();

      cy.get('body').then(($body) => {
        if ($body.find('.mf-msg__info').length > 0) {
          cy.get('#btnSubmit').click();
        }
      });
    }
  });
}

describe('My First Test', () => {
  it('Does not do much!', () => {
    fillForm();
  });
});
