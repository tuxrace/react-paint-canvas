import React from 'react'
import { render } from '@testing-library/react';
import Toolbar from './Toolbar';

describe('Toolbar', () => {
  const props = {
      tools: [ { "id": "SCISSOR", "name": "Scissor", "image": "scissor.svg"}]
  }
  test('Toolbar rendered', async () => {
    const { container, getByTestId } = render(<Toolbar {...props}  />);
    expect(container).toBeDefined();
    expect(getByTestId('Toolbar-root')).toBeInTheDocument();
  })
});