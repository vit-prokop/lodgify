import { FC } from 'react';
import { Card as CardType } from '../types';
import { Card } from '..';
import './CardGrid.css';

type Props = {
  data: CardType[];
  error: boolean;
}

export const CardGrid: FC<Props> = ({ data, error }: Props) => {
  if (error) {
    return <div className="error">There was an error trying to fetch the data.</div>;
  }

  return (
    <div className="card-grid" data-testid="card-grid">
      {data.map((card: CardType, index: number) => <Card {...card} key={`card-${index}`} />)}
    </div>
  );
};
