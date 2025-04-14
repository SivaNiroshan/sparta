import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'istanbul', // ensure you're using Istanbul
      reporter: ['text', 'html', 'json', 'lcov'], // check the reporters you want
      reportsDirectory: './coverage',
    },
    testTimeout:15000
  },
});
