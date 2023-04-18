"use client"

import "./ToggleSwitch.scss"
import {FormEvent, useState} from "react";

interface ToggleSwitchProps {
    label?: string
    labelA?: string
    labelB?: string
    primary?: boolean
    onChange?: () => void
}

export default function ToggleSwitch(
    {
        label = '',
        labelA = '',
        labelB = '',
        primary = false,
        onChange
    }: ToggleSwitchProps) {
    const [checked, setChecked] = useState<boolean>(true);

    const mode = primary ? 'primary' : 'secondary';
    const className = [
        'net-toggle-switch',
        `net-toggle-switch--${mode}`,
    ].join(' ')

    const handleChange = (e:FormEvent<HTMLInputElement>)=>{
        setChecked((prevState)=> !prevState)
        onChange && onChange()
    }

    return (
        <div className={className}>
            <span className="label">{label}</span>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <span className="label-a">{labelA}</span>
                <span className="label-b">{labelB}</span>
            </label>
        </div>
    )
}
