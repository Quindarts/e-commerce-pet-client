import React from "react";

const TextField = (props) => {
    const {
        type,
        name,
        placeholder,
        value,
        disabled,
        color,
        size,
        className,
        ...restProps
    } = props;

    const validColors = ["green", "blue", "black", "brown", "purple"];
    const colorClass = validColors.includes(color) ? ` input--${color}` : "";
    const typeClass =
        type === "search" || type === "form" || type === "checkbox"
            ? ` input--${type}`
            : "";

    const inputClass = `input${typeClass}${colorClass}${
        className ? ` ${className}` : ""
    }${size ? ` input--${size}` : ""}`;

    return (
        <div>
            <input
                type={type}
                className={inputClass}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                {...restProps}
            />
        </div>
    );
};

export default TextField;
