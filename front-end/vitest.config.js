import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // ensure you're using Istanbul
      reporter: ['text', 'html', 'json', 'lcov'], // check the reporters you want
      reportsDirectory: './coverage',
    },
  },
});
