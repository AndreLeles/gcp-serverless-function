import { configDefaults, defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsConfigPaths()],
    test: {
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'lcov'],
            exclude: ['**/*.spec.ts', '**/*.test.ts', 'tests/', 'spec/mocks/'],
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
        exclude: [...configDefaults.exclude, '**/integration-tests/**'],
    },
});