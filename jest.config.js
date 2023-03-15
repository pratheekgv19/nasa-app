
module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: './src/.*\\.(steps)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
};


