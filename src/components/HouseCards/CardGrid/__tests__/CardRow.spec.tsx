import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { CardGrid } from '../CardGrid';
import * as Cards from './mock.json';

describe('Card Grid', () => {
  let grid: RenderResult;

  afterEach(() => {
    grid.unmount();
  })

  it('should render correctly', () => {
    grid = render(<CardGrid data={Cards.data.slice(0, 1)} error={false} />);
    expect(screen.getByTestId('card-grid')).toBeInTheDocument();
  });

  it('should render all cards', () => {
    grid = render(<CardGrid data={Cards.data} error={false} />);
    expect(screen.getByTestId('card-grid')).toBeInTheDocument();
    expect(screen.getAllByTestId('card').length).toBe(Cards.data.length);
  });

  it('should handle error', () => {
    grid = render(<CardGrid data={[]} error />);
    expect(screen.getByText('There was an error trying to fetch the data.')).toBeInTheDocument();
  });
});

