const config = {
	rootDir: './',
	roots: ['<rootDir>/tests'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/tests/javascript/config.ts'],
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
	moduleNameMapper: {
		// Mock all wordpress dependencies that actually externals.
		'\\@wordpress/data': '<rootDir>/test/javascript/__mocks__/@wordpress/data.ts',
		'\\@wordpress/edit-post': '<rootDir>/test/javascript/__mocks__/@wordpress/edit-post.ts',
		'\\@wordpress/plugins': '<rootDir>/test/javascript/__mocks__/@wordpress/plugins.ts',
		// '\\@wordpress/(.+)$': '<rootDir>/test/javascript/__mocks__/@wordpress/$1.js',
	}
};

module.exports = config;
