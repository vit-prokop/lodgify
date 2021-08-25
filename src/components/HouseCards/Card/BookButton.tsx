import { FC } from 'react';
import { ReactComponent as Icon } from '../../../assets/check-icon.svg';

type Props = {
  status: string;
  booked: number;
  onBooked: (status: string) => void;
};

const TEXT = {
  getBooked: (days: number) => `Booked for ${days} days`,
  getButton: (status: string) => (status === 'available' ? 'Book' : 'Not available'),
};

export const BookButton: FC<Props> = ({ status, booked, onBooked }: Props) => {
  if (status === 'booked') {
    return (
      <div className="booked">
        <Icon width={16} height={16} className="icon" />
        {TEXT.getBooked(booked || 10)}
      </div>
    );
  }

  return (
    <div 
        className={`button ${status}`}
        data-testid="button"
        onClick={() => { onBooked('booked') }}
    >
        {TEXT.getButton(status)}
    </div>
  );
};
