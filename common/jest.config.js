module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'index.ts',
    '/node_modules/',
    '<rootDir>/src/ids/',
  ],
  coverageThreshold: {
    global: {
      'branches': 50,
      'functions': 28,
      'lines': 50,
      'statements': 50
    }
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/__tests__/**/*.[jt]s?(x)',
    '**/src/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  transform: {
    '\\.(ts)$': 'ts-jest'
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1"
  }
}
