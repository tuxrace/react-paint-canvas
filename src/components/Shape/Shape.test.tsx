import React from 'react'
import { render } from '@testing-library/react';
import Shape from './Shape';

describe('Shape', () => {
  const props = {
      type: 'rect',
      width: 200,
      height: 200
  }
  test('Shape rendered', async () => {
    const { container } = render(<Shape {...props}  />);
    expect(container).toBeDefined();
  })
});