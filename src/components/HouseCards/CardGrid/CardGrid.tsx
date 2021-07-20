import { FC } from 'react';
import { Card as CardType } from '../types';
import { Card } from '..';
import './CardGrid.css';

type Props = {
  data: CardType[];
  error: boolean;
}

export const CardGrid: FC<Props> = (props: Props) => {
  return (
    <div className="card-grid" data-testid="card-grid">
      {props.data.map((card: CardType, index: number) => <Card {...card} key={`card-${index}`} />)}
    </div>
  );
};
