import React from 'react';
import { render } from '@testing-library/react';
import { SampleButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleButton />);
  const rendered = getByText('Click Me!');
  expect(rendered).toBeTruthy();
});

