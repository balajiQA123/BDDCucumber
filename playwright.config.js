// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({

  /* Global timeout */
  timeout: 30000,

  /* Test directory (not used directly by cucumber but good practice) */
  testDir: './tests',

  /* Reporter */
  reporter: [
    ['list'],
    ['html']
  ],

  use: {
    /* Run in headed mode (for learning) */
    headless: false,

    /* Screenshot */
    screenshot: 'on',

    /* Video */
    video: 'on',

    /* Trace for debugging */
    trace: 'on-first-retry',

    /* Base URL */
    baseURL: 'https://www.saucedemo.com/'
  },

});