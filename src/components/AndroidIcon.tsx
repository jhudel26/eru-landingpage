import React from 'react';

export function AndroidIcon({
  className = 'w-5 h-5',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.523 15.341c-.551 0-.999-.448-.999-1s.448-1 .999-1c.551 0 1 .448 1 1s-.449 1-1 1zm-11.046 0c-.551 0-1-.448-1-1s.449-1 1-1c.551 0 .999.448.999 1s-.448 1-.999 1zm11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.568.152l-2.022 3.503C15.59 8.41 13.856 8.016 12 8.016s-3.59.395-5.138.934L4.84 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.343-4.102-2.689-7.574-6.118-9.44z" />
    </svg>
  );
}
