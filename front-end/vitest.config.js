import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'istanbul',  // Ensure Istanbul is used
            reporter: ['text', 'lcov'],  // Generate lcov.info
            reportsDirectory: 'coverage',  // Ensure coverage files are in the expected directory
        }
    },
});