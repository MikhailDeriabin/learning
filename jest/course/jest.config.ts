import type { Config } from '@jest/types';

const root = '<rootDir>/src'
const codeDir = `${root}/app/doubles`;
const testDir = `${root}/test/server_app_low_mock`;

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    //Get test coverage
    // collectCoverage: true,
    // collectCoverageFrom: [
    //     `${codeDir}/**/*.ts`
    // ],

    //Run test from this folder(s) only
    testMatch: [
        `${testDir}/**/*.test.ts`
    ]
}

export default config;