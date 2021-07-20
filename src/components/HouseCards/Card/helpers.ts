
export const STATUS = [
  'booked', 'available', 'unavailable',
];

export const getStatusInfo = (bookable: boolean, booked: number): string => {
  let status = STATUS[2];
  if (bookable) {
    if (booked === 0) status = STATUS[1];
    else status = STATUS[0];
  }
  
  return status;
};

export const isInViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return (
      (rect.top >= 0 || rect.bottom > 0) &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
