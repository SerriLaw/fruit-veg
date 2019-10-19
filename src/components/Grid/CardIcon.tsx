import React from 'react';
import { GiCarrot, GiShinyApple } from 'react-icons/gi';

export default function Icon({ type }: { type: string }) {
  return type === 'fruit' ? (
    <GiShinyApple color="#009933" size={20} />
  ) : (
    <GiCarrot color="#ff9933" size={20} />
  );
}
