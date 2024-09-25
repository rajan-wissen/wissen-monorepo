import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run to-do:serve',
        production: 'npx nx run to-do:serve-static',
      },
      ciWebServerCommand: 'npx nx run to-do:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
    requestTimeout: 120000, // 120 seconds
  },
});
