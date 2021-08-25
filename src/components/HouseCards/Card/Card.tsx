import { createRef, FC, useEffect, useState } from 'react';
import { getStatusInfo, isInViewport } from './utils';
import { CardImage } from './CardImage';
import { BookButton } from './BookButton';
import { Card as Props } from '../types';
import './Card.scss';

export const Card: FC<Props> = ({ id, name, image, bookable, booked }: Props) => {
  const [isVisible, setVisibility] = useState(true);
  const [bookStatus, setBooked] = useState(getStatusInfo(bookable, booked)); 

  const reference = createRef<HTMLDivElement>();

  // Kind of lazy-loading of the items to limit DOM elements and loaded images
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
          {(bookable && booked === 0) && <div className="focused" />}
          <CardImage image={image} />
          <div className={`status ${bookStatus}`}>{bookStatus}</div>
          <div className="info-wrapper">
            <div className="id">Id: {id}</div>
            <div className="name">{name}</div>
            <BookButton status={bookStatus} booked={booked} onBooked={setBooked} />
          </div>
        </>
      )}
    </div>
  );
};
