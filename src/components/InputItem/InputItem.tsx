import React, { HTMLInputTypeAttribute } from 'react';
import Size from '../../types/Size';
import './InputItem.scss';
import classNames from 'classnames';

interface InputItemProps {
  type?: HTMLInputTypeAttribute;
  size?: Size;
  value?: string;
  refInput?: React.Ref<HTMLInputElement>;
  onChange?: () => void;
}

export default function InputItem({
  type = 'text',
  size = Size.medium,
  value = '',
  refInput,
  onChange,
}: InputItemProps) {
  const className = classNames('net-input', `net-input--${size}`);

  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      defaultValue={value}
      ref={refInput}
    />
  );
}
