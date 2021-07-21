import { createRef, FC, useEffect, useState } from 'react';
import { getStatusInfo, isInViewport } from './utils';
import { CardImage } from './CardImage';
import { BookButton } from './BookButton';
import { Card as Props } from '../types';
import './Card.scss';

export const Card: FC<Props> = ({ id, name, image, bookable, booked }: Props) => {
  const [isVisible, setVisibility] = useState(true);

  const reference = createRef<HTMLDivElement>();
  const status = getStatusInfo(bookable, booked);

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
          <CardImage image={image} />
          <div className={`status ${status}`}>{status}</div>
          <div className="info-wrapper">
            <div className="id">Id: {id}</div>
            <div className="name">{name}</div>
            <BookButton status={status} booked={booked} />
          </div>
        </>
      )}
    </div>
  );
};
