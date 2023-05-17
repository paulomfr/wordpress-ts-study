import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { useSelect } from '@wordpress/data';

import { ConditionalExamplePlugin } from '../../../src';

// jest.mock('@wordpress/data', () => ({
//   useSelect: jest.fn(),
// }));

describe('ConditionalExamplePlugin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render ExamplePlugin if postType is "post"', () => {
    // Mock the return value of useSelect
    (useSelect as jest.Mock).mockReturnValue({ postType: 'post' });

    render(<ConditionalExamplePlugin />);

    // Check that the ExamplePlugin component is rendered
    expect(screen.getByText('Current: post')).toBeTruthy();
  });

  it('should not render ExamplePlugin if postType is not "post"', () => {
    // Mock the return value of useSelect
    (useSelect as jest.Mock).mockReturnValue({ postType: 'page' });

    render(<ConditionalExamplePlugin />);

    // Check that the ExamplePlugin component is not rendered
    expect(screen.queryByText('Current: post')).not.toBeTruthy();
  });
});
