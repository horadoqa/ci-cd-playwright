// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Configura o navegador Chromium
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }, // Configura o Firefox
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }, // Configura o WebKit
    },
  ],
});
