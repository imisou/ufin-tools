module.exports = {
  preset: 'ts-jest',

  roots: ['./'],

  testEnvironment: 'node',

  testMatch: ['**/__test__/?(*.)+(spec|test).+(ts|tsx|js)'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
