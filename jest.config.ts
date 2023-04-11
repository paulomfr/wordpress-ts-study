const config = {
	rootDir: './',
	roots: ['<rootDir>/tests'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	testMatch: [
		'./tests/javascript/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[tj]s?(x)'
	],
	transform: {
		'^.+\\.(ts|tsx)?$': ['ts-jest', {
			/* ts-jest config goes here in Jest */
			babelConfig: true,
		}],
	},
};

module.exports = config;
