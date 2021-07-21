import React from 'react';
import { render, RenderResult, screen, within } from '@testing-library/react';
import { Card } from '../Card';
import * as Props from './mock.json';

describe('Card', () => {
  let card: RenderResult;

  afterEach(() => {
    card.unmount();
  });

  it('should render', () => {
    card = render(<Card {...Props.bookable} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('should render card with a button', () => {
    card = render(<Card {...Props.bookable} />);
    expect(screen.getByText(`Id: ${Props.bookable.id}`)).toBeInTheDocument();
    expect(screen.getByText(Props.bookable.name)).toBeInTheDocument();
    expect(screen.getByTestId('image-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('should render card with text saying how much is booked already', () => {
    card = render(<Card {...Props.booked} />);
    expect(screen.getByText(`Id: ${Props.bookable.id}`)).toBeInTheDocument();
    expect(screen.getByText(Props.bookable.name)).toBeInTheDocument();
    expect(screen.getByTestId('image-wrapper')).toBeInTheDocument();
    expect(screen.getByText(`Booked for ${Props.booked.booked} days`)).toBeInTheDocument();
  });

  it('should render card with unavailable button', () => {
    card = render(<Card {...Props.unavailable} />);
    expect(screen.getByText(`Id: ${Props.unavailable.id}`)).toBeInTheDocument();
    expect(screen.getByText(Props.unavailable.name)).toBeInTheDocument();
    expect(screen.getByTestId('image-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(within(screen.getByTestId('button')).getByText('Not available')).toBeInTheDocument();
  });
});
