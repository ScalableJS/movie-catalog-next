'use client';

import './ToggleSwitch.scss';
import { FormEvent, useRef, useState } from 'react';
import classNames from 'classnames';

interface ToggleSwitchProps {
  label?: string;
  labelA?: string;
  labelB?: string;
  primary?: boolean;
  defaultChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export default function ToggleSwitch({
  label = '',
  labelA = '',
  labelB = '',
  primary = false,
  defaultChecked = false,
  onChange,
}: ToggleSwitchProps) {
  const refCheckbox = useRef<HTMLInputElement>(null);

  const mode = primary ? 'primary' : 'secondary';
  const className = classNames(
    'net-toggle-switch',
    `net-toggle-switch--${mode}`
  );

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onChange && onChange(!!refCheckbox?.current?.checked);
  };

  return (
    <div className={className}>
      <span className="label">{label}</span>
      <label>
        <input
          ref={refCheckbox}
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={handleChange}
        />
        <span className="label-a">{labelA}</span>
        <span className="label-b">{labelB}</span>
      </label>
    </div>
  );
}
