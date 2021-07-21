import { FC } from 'react';
import { ReactComponent as Icon } from '../../../assets/check-icon.svg';

type Props = {
  status: string;
  booked: number;
};

const TEXT = {
  getBooked: (days: number) => `Booked for ${days} days`,
  getButton: (status: string) => (status === 'available' ? 'Book' : 'Not available'),
};

export const BookButton: FC<Props> = ({ status, booked }: Props) => {
  if (status === 'booked') {
    return (
      <div className="booked">
        <Icon width={16} height={16} className="icon" />
        {TEXT.getBooked(booked)}
      </div>
    );
  }

  return <div className={`button ${status}`} data-testid="button">{TEXT.getButton(status)}</div>
};
