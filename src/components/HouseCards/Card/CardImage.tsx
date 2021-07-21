import { FC, useEffect, useState } from 'react';
import placeholderIcon from '../../../assets/placeholder-icon.svg';

type Props = {
  image: string;
};

export const CardImage: FC<Props> = ({ image }: Props) => {
  const [isPlaceholder, setPlaceholder] = useState(true);

  // To ensure the image will be 'shown' only when it is loaded
  useEffect(() => {
    const img = new Image();
    img.onload = () => { setPlaceholder(false); };
    img.src = image;
  }, [image]);

  return (
    <div className="image-wrapper" data-testid="image-wrapper">
      {isPlaceholder && (
        <div
          className="placeholder"
          style={{ backgroundImage: `url(${placeholderIcon})` }}
          data-testid="placeholder-icon"
        />
      )}
      {!isPlaceholder && (
        <div
          className="image"
          style={{ backgroundImage: `url(${image})` }}
          data-testid="image-loaded"
        />
      )}
    </div>
  );
};
