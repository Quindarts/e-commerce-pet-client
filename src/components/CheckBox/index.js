import React from "react";

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
    } = props;

    // Danh sách màu hợp lệ
    const validColors = ["green", "blue", "black", "brown", "purple"];

    // Kiểm tra màu hợp lệ
    const colorClass = validColors.includes(color) ? ` checkbox--${color}` : "";

    const checkboxClass = `${"checkbox"}${colorClass}${
        className ? ` ${className}` : ""
    }${size ? ` checkbox--${size}` : ""}`;

    const labelClass = `checkbox--${color}`; // Set label class based on checkbox color

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
    );
};

export default Checkbox;
