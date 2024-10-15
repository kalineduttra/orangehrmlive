const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hz4t21",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
