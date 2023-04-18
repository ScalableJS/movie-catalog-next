import React, {HTMLInputTypeAttribute} from 'react'
import Size from "../../types/Size";
import "./InputItem.scss"

interface InputItemProps {
    type?: HTMLInputTypeAttribute
    size?: Size
    value?: string
    ref?: React.Ref<HTMLInputElement>
    onChange?: () => void
}

export default function InputItem(
    {
        type = "text",
        size = Size.medium,
        value = '',
        ref,
        onChange
    }: InputItemProps) {
    const className = [
        'net-input',
        `net-input--${size}`
    ].join(' ');

    return (<input
        className={className}
        type={type}
        onChange={onChange}
        defaultValue={value}
        ref={ref}
    />)
}
