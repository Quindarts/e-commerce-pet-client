import React from 'react'

const TextField = (props) => {
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
        label,
        errors,
        id,
        register,
        validate,
        ...restProps
    } = props

    // Danh sách màu hợp lệ
    const validColors = ['green', 'blue', 'black', 'brown', 'purple']

    // Kiểm tra màu hợp lệ
    const colorClass = validColors.includes(color) ? ` input--${color}` : ''

    // Kiểm tra type hợp lệ
    const typeClass =
        type === 'search' || type === 'form' || type === 'checkbox'
            ? ` input--${type}`
            : ''

    // Tạo class dựa trên các điều kiện
    const inputClass = `input${typeClass}${colorClass}${
        className ? ` ${className}` : ''
    }${size ? ` input--${size}` : ''}`

    const labelClass = `label${colorClass}`

    const errorClass = `error`
    return (
        <div className="textfield">
            {label && (
                <label className={labelClass} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={inputClass}
                name={name}
                id={id}
                placeholder={placeholder}
                {...register(id, validate)}
                {...restProps}
            />
            {errors && errors[id] && (
                <small className={errorClass}>{errors[id]?.message}</small>
            )}
        </div>
    )
}

export default TextField
