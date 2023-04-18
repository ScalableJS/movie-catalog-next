'use client';
import InputItem from '../InputItem/InputItem';
import ButtonItem from '../ButtonItem/ButtonItem';
import Size from '../../types/Size';
import React, { useRef, useState } from 'react';
import './SearchItem.scss';
import classNames from 'classnames';

interface SearchItemProps {
  label?: string;
  primary?: boolean;
  size?: Size;
  searchValue?: string;
  onSubmit?: (value: string) => void;
}

export default function SearchItem({
  primary = false,
  size = Size.medium,
  searchValue = '',
  label = '',
  onSubmit,
}: SearchItemProps) {
  const refInput = useRef<HTMLInputElement>(null);
  const mode = primary ? 'primary' : 'secondary';
  const className = classNames(
    'net-search-item',
    `net-search-item--${mode}`,
    `net-search-item--${size}`
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(refInput?.current?.value || '');
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <InputItem
        size={size}
        type="search"
        value={searchValue}
        refInput={refInput}
      />
      <ButtonItem size={size} label={label} primary />
    </form>
  );
}
