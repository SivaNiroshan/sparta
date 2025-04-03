import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // Based on your output, you're using istanbul
      reporter: ['text', 'lcov', 'json', 'html'],
      reportsDirectory: './coverage'
    },
    // Add JUnit reporter for SonarQube
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './junit-report.xml'
    }
  }
})
