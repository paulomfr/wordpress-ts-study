import '@testing-library/jest-dom';
import { afterEach } from '@jest/globals';
import { cleanup } from '@testing-library/react';


afterEach(() => {
  cleanup();
});
