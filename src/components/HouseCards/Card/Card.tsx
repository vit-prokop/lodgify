import { createRef, FC, useEffect, useState } from 'react';
import { getStatusInfo, isInViewport } from './helpers';
import { CardImage } from './CardImage';
import { BookButton } from './BookButton';
import { Card as Props } from '../types';
import './Card.scss';

export const Card: FC<Props> = (props: Props) => {
  const [isVisible, setVisibility] = useState(true);

  const reference = createRef<HTMLDivElement>();
  const status = getStatusInfo(props.bookable, props.booked);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (reference.current && reference.current !== null) {
        setVisibility(isInViewport(reference.current!));
      }
    });
  }, [reference]);

  return (
    <div className="card" data-testid="card" ref={reference}>
      {isVisible && (
        <>
          <div className="focused" />
          <CardImage image={props.image} status={status} />
          <div className="info-wrapper">
            <div className="id">Id: {props.id}</div>
            <div className="name">{props.name}</div>
            <BookButton status={status} booked={props.booked} />
          </div>
        </>
      )}
    </div>
  );
};
