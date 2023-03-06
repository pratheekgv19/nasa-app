module.exports = {
moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx',],
transform: {

'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
},
testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
testEnvironment: 'jsdom',
};