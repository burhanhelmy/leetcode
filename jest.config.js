module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    reporters: ["default", "jest-junit"],
    coverageReporters: ['json-summary', 'text', 'lcov']
};