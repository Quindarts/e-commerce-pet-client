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

    return (
        <div>
            <input
                type={type}
                className={inputClass}
                name={name}
                placeholder={placeholder}
                {...restProps}
            />
        </div>
    )
}

export default TextField
