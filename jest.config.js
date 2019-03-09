module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.(ts|tsx)$": "ts-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>fileTransformer.js",
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
    modulePaths: ["<rootDir>/node_modules"],
    testMatch: ["**/?(*.)(spec|test|tests).js?(x)", "**/?(*.)(spec|test|tests).ts?(x)"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    collectCoverage: true,
    automock: false,
    testResultsProcessor: "jest-junit",
    testURL: "http://localhost",
};
