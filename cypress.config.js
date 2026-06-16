const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "salomati.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
