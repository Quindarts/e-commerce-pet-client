import { Icon } from '@iconify/react'
import { useSnackbar } from 'notistack'
import React, { useState, useEffect } from 'react'

function QuantityTextField(props) {
    const { enqueueSnackbar } = useSnackbar()
    const {
        quantity,
        onChange,
        size = 'large',
        style,
        className,
        label,
        errors,
        id,
        ...rest
    } = props
    const [value, setValue] = useState(0)

    const updateQuantityByClickOnIcons = (value) => {
        if (quantity + value >= 0) {
            onChange(quantity + value)
        } else {
            enqueueSnackbar('Must be a positive number', {
                variant: 'warning',
            })
        }
    }

    const entryQuantity = (value) => {
        if (value < 0) {
            setValue(0)
            return
        }
        if (!containsOnlyNumbers(value)) {
            setValue(quantity)
            return
        }
        onChange(Number(value))
    }

    useEffect(() => {
        setValue(quantity)
    }, [quantity])

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10) || 0
        setValue(inputValue)
        entryQuantity(inputValue)
    }

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str)
    }

    return (
        <div {...rest} className={className}>
            <div
                className={`input__quantity input__quantity--${size}`}
                style={style}
            >
                {label && <label htmlFor={id}>{label}</label>}
                <button
                    className="minus h-cb"
                    onClick={() => {
                        updateQuantityByClickOnIcons(-1)
                    }}
                >
                    <Icon icon="typcn:minus" />
                </button>
                <input
                    id={id}
                    className="input__quantity-input"
                    pattern="[0-9]"
                    onChange={handleInputChange}
                    value={value}
                />
                <button
                    className="plus h-cb "
                    onClick={() => {
                        updateQuantityByClickOnIcons(1)
                    }}
                >
                    <Icon icon="typcn:plus" />
                </button>
                {/* {errors && errors[id] && <small>{errors[id]?.message}</small>} */}
            </div>
        </div>
    )
}

export default QuantityTextField
