module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transforma arquivos JavaScript e JSX usando babel-jest
    },
    moduleFileExtensions: ['js', 'jsx'], // Extensões que o Jest reconhecerá
    testEnvironment: 'jsdom', // Ambiente de teste
    transformIgnorePatterns: [
      "/node_modules/(?!(axios)/)", // Ignora node_modules, exceto axios
    ],
  };
  