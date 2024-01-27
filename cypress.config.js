const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'automacao'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.urlDefault

      return config
    },
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos'
});
