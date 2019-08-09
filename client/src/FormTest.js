import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

describe('<Form />', () => {
    it('renders without crashing', () => {
      render(<Form />);
    });
    it('username', () => {
      let clicked = false;
      const { getByText } = render(<Form username={() => clicked = true} />);
      const nameButton = getByText(/username/i);
      fireEvent.click(nameButton);
      expect(clicked).toBe(true);
    });