import { FC } from 'react';
import { Card as CardType } from '../types';

type Props = {
  data: CardType[];
  error: boolean;
}

export const CardRow: FC<Props> = (props: Props) => {
  console.log(props.data);

  return <div />;
};
