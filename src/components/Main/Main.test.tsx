import React from 'react'
import { render } from '@testing-library/react';
import Main from './Main';
import axios from 'axios';

jest.mock('axios');

describe('Main', () => {
  test('Main rendered', async () => {
    axios.get.mockResolvedValue({
      "toolbar": [
          { "id": "SCISSOR", "name": "Scissor", "image": "scissor.svg"},
          { "id": "GLUE", "name": "Glue",  "image": "glue.svg"},
          { "id": "ERASER", "name": "Eraser",  "image": "eraser.svg"}
      ],
      "dimensions": {
          "width": 200,
          "height": 200
      }
  })
    const { container, getByTestId } = render(<Main />);
    expect(container).toBeDefined();
    expect(getByTestId('main-root')).toBeInTheDocument();
  })
});