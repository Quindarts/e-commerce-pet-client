import React from 'react'

const Checkbox = (props) => {
    const {
        type,
        name,
        placeholder,
        value,
        onChange,
        disabled,
        color,
        size,
        className,
        checked,
        label,
        ...restProps
    } = props

    const validColors = ['green', 'blue', 'black', 'brown', 'purple']
    const colorClass = validColors.includes(color) ? ` checkbox--${color}` : ''
    const checkboxClass = `${'checkbox'}${colorClass}${
        className ? ` ${className}` : ''
    }${size ? ` checkbox--${size}` : ''}`

    const labelClass = `checkbox--${color}`

    return (
        <>
            <label htmlFor="custom-checkbox" className={labelClass}>
                <input
                    className={checkboxClass}
                    type="checkbox"
                    id="custom-checkbox"
                    checked={checked}
                    onChange={onChange}
                    {...restProps}
                />
                {label}
            </label>
        </>
    )
}

export default Checkbox
