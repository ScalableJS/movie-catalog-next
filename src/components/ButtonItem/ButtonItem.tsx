import React from 'react'
import './ButtonItem.scss';
import Size from "../../types/Size";

interface ButtonItemProps {
    label?: string
    primary?: boolean
    size?: Size,
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void
}

export default function ButtonItem({label = '', primary = false, size = Size.medium, onClick}: ButtonItemProps) {
    const mode = primary ? 'primary' : 'secondary';
    const className = [
        'net-button',
        `net-button--${mode}`,
        `net-button--${size}`,
        mode
    ].join(' ')

    return (<button
        type="button"
        className={className}
        onClick={onClick}>
        {label}
    </button>);
}
