const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth:1920,
    baseUrl: 'https://allo.ua/',
    e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      }
  },
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
