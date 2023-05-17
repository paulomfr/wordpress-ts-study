export const mockSelectors = {
  'core/editor': {
    getCurrentPostType: jest.fn(),
  },
};

export const select = <T extends keyof typeof mockSelectors>(
  storeName: T
): typeof mockSelectors[T] => mockSelectors[storeName];
// export const useSelect = jest.fn( fn => fn( select ) );
export const useSelect = jest.fn();

beforeEach( () => {
	useSelect.mockClear();

	// Clear all the mock store selectors
	Object.values( mockSelectors ).forEach( store => Object.values( store ).forEach( mock => mock.mockClear() ) );
} );
